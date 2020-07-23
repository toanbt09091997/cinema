import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CinemaService} from '../../../shared/service/cinema.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cinema-create',
  templateUrl: './cinema-create.component.html',
  styleUrls: ['./cinema-create.component.css']
})
export class CinemaCreateComponent implements OnInit {
  form: FormGroup;
  isUpdate: any = false;
  error: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private cinemaService: CinemaService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [''],
      marap: ['', Validators.required],
      tenrap: ['', Validators.required],
      diachi: ['', Validators.required],
      gioithieu: [''],
    });

    this.route.data.subscribe(({cinema}) => {
      this.isUpdate = cinema && cinema.id !== undefined;
      if (this.isUpdate) {
        this.form.patchValue({
          id: cinema.id,
          marap: cinema.marap,
          tenrap: cinema.tenrap,
          diachi: cinema.diachi,
          gioithieu: cinema.gioithieu,
        });
      }
    });
  }

  doSubmit() {
    const cinema = this.form.value;
    if (this.isUpdate) {
      if (cinema.tenrap === '' || cinema.diachi === '' || cinema.gioithieurap === '') {
        this.error = 'Thông tin không được để trống !';
      } else {
        this.cinemaService.update(cinema).subscribe(
          () => this.router.navigateByUrl('/cinema'),
          error => console.log(error));
      }
    } else {
      if (cinema.marap === '' || cinema.tenrap === '' || cinema.diachi === '' || cinema.gioithieurap === '') {
        this.error = 'Thông tin không được để trống !';
      } else {
        this.cinemaService.create(cinema).subscribe(
          (data) => {
            if (data == null) {
              this.error = 'Mã rạp hoặc tên rạp đã tồn tại!';
            } else {
              this.router.navigateByUrl('/cinema');
            }
          },
          error => console.log(error));
      }
    }
    }
}
