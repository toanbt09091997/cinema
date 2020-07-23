import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {SeatService} from '../../../shared/service/seat.service';
import {EventManagement} from '../../../shared/service/event.management';
import {SeatModel} from '../../../model/seat.model';

@Component({
  selector: 'app-seat-delete',
  templateUrl: './seat-delete.component.html',
  styleUrls: ['./seat-delete.component.css']
})
export class SeatDeleteComponent implements OnInit {

  seat: SeatModel;

  constructor(public modal: NgbActiveModal,
              private seatService: SeatService,
              private eventManagement: EventManagement) { }

  ngOnInit(): void {
  }

  delete() {
    this.seatService.delete(this.seat.id).subscribe(
      () => {
        this.eventManagement.broadcast('UPDATE_SEAT');
        this.modal.close();
      }, error => console.log(error)
    );
  }
}
