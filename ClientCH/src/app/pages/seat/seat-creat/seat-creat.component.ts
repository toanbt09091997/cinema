import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SeatService} from '../../../shared/service/seat.service';



@Component({
  selector: 'app-seat-creat',
  templateUrl: './seat-creat.component.html',
  styleUrls: ['./seat-creat.component.css']
})
export class SeatCreatComponent implements OnInit {
  form: FormGroup;
  isUpdate: any = false;
  error: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private seatService: SeatService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [''],
       // idGhe: ['', Validators.required],
      createdAt: [''],
      updateAt: [''],
      loaighe: ['', Validators.required],
      tenghe: ['', Validators.required],
      status: ['', Validators.required],
    });

    this.route.data.subscribe(({seat}) => {
      this.isUpdate = seat && seat.id !== undefined;
      if (this.isUpdate) {
        this.form.patchValue({
          id: seat.id,
          // idGhe: seat.idGhe,
          createdAt: seat.createdAt,
          updateAt: seat.updateAt,
          loaighe: seat.loaighe,
          tenghe: seat.tenghe,
          status: seat.status
        });
      }
    });
  }

  doSubmit() {
    const seat = this.form.value;
    if (this.isUpdate) {
      this.seatService.update(seat).subscribe(
        () => this.router.navigateByUrl('/seat'),
        error => console.log(error));
    } else {
      this.seatService.create(seat).subscribe(
        () => this.router.navigateByUrl('/seat'),
        error => console.log(error));
    }
  }
}
