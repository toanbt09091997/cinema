import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CinemaModel} from '../../../model/cinema.model';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieService} from '../../../shared/service/movie.service';
import {CinemaService} from '../../../shared/service/cinema.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {
  form: FormGroup;
  isUpdate: any = false;
  error: string;
  cinemas: CinemaModel[];

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private movieService: MovieService,
              private cinemaService: CinemaService) { }

  ngOnInit(): void {
    this.loadMovies();
    this.form = this.fb.group({
      id: [''],
      maphim: ['', Validators.required],
      tenphim: ['', Validators.required],
      loaiphim: ['', Validators.required],
      theloai: ['', Validators.required],
      namsx: ['', Validators.required],
      image: ['', Validators.required],
      trailer: ['', Validators.required],
      minutes: ['', Validators.required],
      mota: ['', Validators.required],
      idrap: ['', Validators.required],
    });

    this.route.data.subscribe(({movie}) => {
      this.isUpdate = movie && movie.id !== undefined;
      if (this.isUpdate) {
        this.form.patchValue({
          id: movie.id,
          maphim: movie.maphim,
          tenphim: movie.tenphim,
          loaiphim: movie.loaiphim,
          theloai: movie.theloai,
          namsx: movie.namsx,
          image: movie.image,
          trailer: movie.trailer,
          minutes: movie.minutes,
          mota: movie.mota,
          idrap: movie.idrap,
        });
      }
    });
  }

  loadMovies() {
    this.cinemaService.fetch().subscribe(cinema => {
      this.cinemas = cinema;
    }, error => console.log(error));
  }

  doSubmit() {
    const movie = this.form.value;
    movie.cinema = {id: movie.idrap};
    if (this.isUpdate) {
      if (movie.maphim === '' || movie.tenphim === '' || movie.loaiphim === '' || movie.theloai === '' || movie.namsx === '' || movie.minutes === '' ) {
        this.error = 'Thông tin không được để trống !';
      } else {
        this.movieService.update(movie).subscribe(
          () => this.router.navigateByUrl('/movie'),
          error => console.log(error));
      }
    } else {
      if (movie.maphim === '' || movie.tenphim === '' || movie.loaiphim === '' || movie.theloai === '' || movie.namsx === '' || movie.minutes === '' ) {
        this.error = 'Thông tin không được để trống !';
      } else {
        this.movieService.create(movie).subscribe(
          (data) => {
            if (data == null) {
              this.error = 'Mã rạp hoặc tên rạp đã tồn tại!';
            } else {
              this.router.navigateByUrl('/movie');
            }
          },
          error => console.log(error));
      }
    }
  }
}
