import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TicketService} from '../../../shared/service/ticket.service';
import {ShowtimeService} from '../../../shared/service/showtime.service';
import {CinemaService} from '../../../shared/service/cinema.service';
import {CinemaModel} from '../../../model/cinema.model';
import {MovieModel} from '../../../model/movie.model';
import {SeatModel} from '../../../model/seat.model';
import {RoomModel} from '../../../model/room.model';
import {RoomService} from '../../../shared/service/room.service';
import {MovieService} from '../../../shared/service/movie.service';

@Component({
  selector: 'app-showtime-create',
  templateUrl: './showtime-create.component.html',
  styleUrls: ['./showtime-create.component.css']
})
export class ShowtimeCreateComponent implements OnInit {
  form: FormGroup;
  isUpdate: any = false;
  error: string;
  cinemas: CinemaModel[];
  movies: MovieModel[];
  rooms: RoomModel[];
  cID: number;
  name: string;
  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private showtimeService: ShowtimeService,
              private cinemaService: CinemaService,
              private movieService: MovieService,
              private roomService: RoomService,
              private moviesService: MovieService) {
  }

  ngOnInit(): void {
    this.loadCinemas();
    this.form = this.fb.group({
      id: ['', Validators.required],
      dateStart: ['', Validators.required],
      moviez: ['', Validators.required],
      marap: ['', Validators.required],
      // price: ['', Validators.required],
      timeStart: ['', Validators.required],
    });

    this.route.data.subscribe(({showtime}) => {
      this.isUpdate = showtime && showtime.id !== undefined;
      if (this.isUpdate) {
        this.form.patchValue({
          id: showtime.id,
          // price: showtime.price,
          dateStart: showtime.dateStart,
          roomEntity: showtime.roomEntity,
          movie: showtime.movie,
          timeStart: showtime.timeStart,
        });
      }
    });
  }

  loadCinemas() {
    this.cinemaService.fetch().subscribe(cinemas => {
      this.cinemas = cinemas;
    }, error => console.log(error));
  }

  doSubmit() {
    const showtime = this.form.value;
    showtime.movie = {id: showtime.moviez};
    if (this.isUpdate) {
      this.showtimeService.update(showtime).subscribe(
        () => this.router.navigateByUrl('/showtime'),
        error => console.log(error));
    } else {
      this.showtimeService.create(showtime).subscribe(
        () => this.router.navigateByUrl('/showtime'),
        error => console.log(error));
    }
  }

  getCinema() {
    this.cinemaService.findOne(this.cID).subscribe((cinema) => {
      this.movieService.findbyRap(this.cID).subscribe((movie) => {
        this.movies = movie;
      });
      this.rooms = cinema.roomEntities;
    });
  }
}
