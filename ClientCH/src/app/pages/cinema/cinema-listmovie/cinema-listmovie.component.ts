import { Component, OnInit } from '@angular/core';
import {CinemaModel} from '../../../model/cinema.model';
import {CinemaService} from '../../../shared/service/cinema.service';
import {EventManagement} from '../../../shared/service/event.management';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MovieModel} from '../../../model/movie.model';
import {MovieService} from '../../../shared/service/movie.service';
import {RoomModel} from '../../../model/room.model';
import {SeatModel} from '../../../model/seat.model';
import {MovieDeleteComponent} from '../../movie/movie-delete/movie-delete.component';
import {CinemamovieModel} from '../../../model/cinemamovie.model';
import {CinemamovieDeleteComponent} from '../cinemamovie-delete/cinemamovie-delete.component';

@Component({
  selector: 'app-cinema-listmovie',
  templateUrl: './cinema-listmovie.component.html',
  styleUrls: ['./cinema-listmovie.component.css']
})
export class CinemaListmovieComponent implements OnInit {
  cinemas: CinemaModel[] = [];
  movies: MovieModel[] = [];
  rooms: RoomModel[];
  seats: SeatModel[];
  options: string;
  ciid: number;

  constructor(private cinemaService: CinemaService,
              private movieService: MovieService,
              private eventManagement: EventManagement,
              public modal: NgbModal) { }

  ngOnInit(): void {
    this.loadCinemas();
    this.loadMovies();
    this.eventManagement.subscribe('UPDATE_MOVIE', () => this.loadMovies());
  }

  loadCinemas() {
    this.cinemaService.fetch().subscribe(cinemas => {
      this.cinemas = cinemas;
      // this.rooms = cinemas[0].roomEntities;
      this.options = cinemas[0].tenrap;
      this.ciid = cinemas[0].id;
      this.movieService.findbyRap(cinemas[0].id).subscribe((movie) => {
        this.movies = movie;
      });
    }, error => console.log(error));
  }

  onSelect(cinema: CinemaModel) {
    this.options = cinema.tenrap;
    this.ciid = cinema.id;
    this.movieService.findbyRap(cinema.id).subscribe((movie) => {
      this.movies = movie;
    });
  }

  loadMovies() {
    this.movieService.fetch().subscribe(movies => {
      this.movies = movies;
    }, error => console.log(error));
  }
  goToDelete(cinemamovie: CinemamovieModel) {
    const modalRef = this.modal.open(CinemamovieDeleteComponent);
    modalRef.componentInstance.cinemamovie = cinemamovie;
  }
}
