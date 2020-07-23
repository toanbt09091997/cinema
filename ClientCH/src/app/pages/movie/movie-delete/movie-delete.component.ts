import { Component, OnInit } from '@angular/core';
import {MovieModel} from '../../../model/movie.model';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MovieService} from '../../../shared/service/movie.service';
import {EventManagement} from '../../../shared/service/event.management';
import {CinemaService} from '../../../shared/service/cinema.service';

@Component({
  selector: 'app-movie-delete',
  templateUrl: './movie-delete.component.html',
  styleUrls: ['./movie-delete.component.css']
})

export class MovieDeleteComponent implements OnInit {

  movie: MovieModel;
  constructor(public modal: NgbActiveModal,
              private movieService: MovieService,
              private eventManagement: EventManagement,
              private cinemaService: CinemaService) { }

  ngOnInit(): void {
  }

  delete() {
    this.movieService.delete(this.movie.id).subscribe(
      () => {
        this.eventManagement.broadcast('UPDATE_MOVIE');
        this.modal.close();
      }, error => console.log(error)
    );
  }
}
