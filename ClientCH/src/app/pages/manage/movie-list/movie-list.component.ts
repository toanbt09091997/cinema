import {Component, Input, OnInit} from '@angular/core';
import {RoomModel} from '../../../model/room.model';
import {MovieModel} from '../../../model/movie.model';
import {CinemaService} from '../../../shared/service/cinema.service';
import {EventManagement} from '../../../shared/service/event.management';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CinemaModel} from '../../../model/cinema.model';
import {SeatModel} from '../../../model/seat.model';
import {ShowtimeModel} from '../../../model/showtime.model';
import {ShowtimeService} from '../../../shared/service/showtime.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TicketService} from '../../../shared/service/ticket.service';
import {TicketModel} from '../../../model/ticket.model';
import {Router} from '@angular/router';
import {MovieService} from '../../../shared/service/movie.service';
import {SeatService} from '../../../shared/service/seat.service';
import {Observable} from 'rxjs';
import {OrderModel} from '../../../model/order.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private cinemaService: CinemaService,
              private showtimeService: ShowtimeService,
              private ticketService: TicketService,
              private movieService: MovieService,
              private seatService: SeatService,
              private router: Router,
              private fb: FormBuilder) {

  }
  isUpdate: any = false;
  @Input() movies: MovieModel[];
  @Input() cinema: CinemaModel;
  showtimes: ShowtimeModel[];
  seats: SeatModel[];
  select: number;
  status = false;
  ticket: TicketModel;
  error: string;
  sSelect: SeatModel;
  teng: string;
  giave: number;
  ticketShow: TicketModel[];
  showtime: ShowtimeModel;
  order: OrderModel;
  const; // @ts-ignore
  listSeat: { id: number, tenghe: string, loaighe: number, status: number, createdAt: Date, updateAt: Date }[] = [];
  listTicket: { giave: number, tenphim: string, idGhe: number, marap: number, timeStart: Date, timeEnd: Date, lichchieu: number }[] = [];

  ngOnInit(): void {
      this.seats = null;
      this.sSelect = null;
  }

  OnSelect(movie: MovieModel) {
    this.status = !this.status;
    if (this.status) {
      this.select = movie.id;
      this.movies = [movie];
      this.seats = [];
      this.showtimeService.findbyMovieID(movie.id).subscribe((showtime) => {
        this.showtimes = showtime;
      });
    } else {
      this.select = null;
      this.sSelect = null;
      this.movieService.findbyRap(this.cinema.id).subscribe((mov) => {
        this.movies = mov;
      });
    }
  }

  showtimeClick(s: ShowtimeModel) {
    this.showtime = s;
    this.giave = s.price;
    this.ticketService.findbyShow(s.id).subscribe((ticket) => {
      this.ticketShow = ticket;
      this.seatService.findbyRoom(s.roomEntity.id).subscribe((seat) => {
        // tslint:disable-next-line:no-unused-expression
        ticket.forEach((elem1, index) => {elem1;
          // tslint:disable-next-line:no-unused-expression no-shadowed-variable
          seat.forEach((elem2, index) => {elem2;
            if (elem1.idGhe === elem2.id) {
              elem2.status = 2;
            }
          });
        });
        this.seats = seat;
      });
    });

    this.seatService.findbyRoom(s.roomEntity.id).subscribe((seat) => {
      this.seats = seat;
    });
  }
  xz: SeatModel;
  seatSelect(s: SeatModel) {
    // @ts-ignore
    if (this.listSeat.length === 0) {
      // @ts-ignore
      this.listSeat.push(s);
    } else {
      this.listSeat.forEach( (seat) => {
        if ( seat === s) {
          // @ts-ignore
          this.xz = seat;
          // @ts-ignore
          this.listSeat.pop(seat);
        } else {

        }
      });
      // @ts-ignore
      this.listSeat.push(s);
      // // @ts-ignore
      // this.listSeat.pop(this.xz);
    }
    console.log(this.listSeat);

    // console.log(this.listSeat);
    this.sSelect = s;
    this.teng = s.tenghe;
  }


  clickSelect() {
    this.ticket = {
      giave: this.giave,
      marap: this.cinema.id,
      idGhe: this.sSelect.id,
      tenphim: this.movies[0].tenphim,
      timeStart: this.showtimes[0].dateStart,
      timeEnd: this.showtimes[0].dateEnd,
      lichchieu: this.showtime.id,
      order: null
    };
    this.order = {
      orderid: null,
      tenrap: this.cinema.tenrap,
      phongchieu: this.showtime.roomEntity.maphong,
      time: this.showtimes[0].dateStart,
      tenphim: this.movies[0].tenphim,
      sove: this.listSeat.length,
      tongtien: this.giave
    };
  }
}
