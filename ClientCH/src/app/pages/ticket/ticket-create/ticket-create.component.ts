import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TicketService} from '../../../shared/service/ticket.service';
import {SeatModel} from "../../../model/seat.model";
import {SeatService} from "../../../shared/service/seat.service";
import {CinemaModel} from "../../../model/cinema.model";
import {CinemaService} from "../../../shared/service/cinema.service";
import {MovieService} from '../../../shared/service/movie.service';
import {MovieModel} from '../../../model/movie.model';

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.css']
})
export class TicketCreateComponent implements OnInit {
  form: FormGroup;
  isUpdate: any = false;
  error: string;
  seats: SeatModel[] = [];
  cinemas: CinemaModel[] = [];
  movies: MovieModel[] = [];


  constructor(private cinemaService: CinemaService,
              private seatService: SeatService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private ticketService: TicketService,
              private movieService: MovieService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: ['', Validators.required],
      createdAt: ['', Validators.required],
      updateAt: ['', Validators.required],
      maVe: ['', Validators.required],
      tenphim: ['', Validators.required],
      idGhe: ['', Validators.required],
      marap: ['', Validators.required],
      maphong: ['', Validators.required],
      giave: ['', Validators.required],
      timeStart: ['', Validators.required],
      timeEnd: ['', Validators.required],
    });

    this.route.data.subscribe(({ticket}) => {
      this.isUpdate = ticket && ticket.id !== undefined;
      if (this.isUpdate) {
        this.form.patchValue({
          id: ticket.id,
          createdAt: ticket.createdAt,
          updateAt: ticket.updateAt,
          maVe: ticket.maVe,
          tenphim: ticket.tenphim,
          idGhe: ticket.idGhe,
          marap: ticket.marap,
          maphong: ticket.maphong,
          giave: ticket.giave,
          timeStart: ticket.timeStart,
          timeEnd: ticket.timeEnd
        });
      }
    });
    this.loadSeats();
    this.loadCinemas();
    this.loadMovies();
  }

  doSubmit() {
    const ticket = this.form.value;
    // ticket.timeStart
    if (this.isUpdate) {
      this.ticketService.update(ticket).subscribe(
        () => this.router.navigateByUrl('/ticket'),
        error => console.log(error));
    } else {
      this.ticketService.create(ticket).subscribe(
        () => this.router.navigateByUrl('/ticket'),
        error => console.log(error));
    }
  }
  loadSeats() {
    this.seatService.fetch().subscribe(seat => {
      this.seats = seat;
    }, error => console.log(error));
  }
  loadMovies() {
    this.movieService.fetch().subscribe(movie => {
      this.movies = movie;
    }, error => console.log(error));
  }
  loadCinemas() {
    this.cinemaService.fetch().subscribe(cinemas => {
      this.cinemas = cinemas;
    }, error => console.log(error));
  }

  getCinema() {

  }

}
