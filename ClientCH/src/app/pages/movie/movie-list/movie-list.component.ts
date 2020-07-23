import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../../shared/service/movie.service';
import {EventManagement} from '../../../shared/service/event.management';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MovieModel} from '../../../model/movie.model';
import {MovieDeleteComponent} from '../movie-delete/movie-delete.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: MovieModel[] = [];

  constructor(private movieService: MovieService, private eventManagement: EventManagement,
              public modal: NgbModal) { }

  ngOnInit(): void {
    this.loadMovies();
    this.eventManagement.subscribe('UPDATE_MOVIE', () => this.loadMovies());
  }

  loadMovies() {
    this.movieService.fetch().subscribe(movies => {
      this.movies = movies;
    }, error => console.log(error));
  }
  goToDelete(movie: MovieModel) {
    const modalRef = this.modal.open(MovieDeleteComponent);
    modalRef.componentInstance.movie = movie;
  }

}
