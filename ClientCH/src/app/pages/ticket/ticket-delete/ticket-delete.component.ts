import { Component, OnInit } from '@angular/core';
import {SeatModel} from '../../../model/seat.model';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {SeatService} from '../../../shared/service/seat.service';
import {EventManagement} from '../../../shared/service/event.management';
import {TicketModel} from '../../../model/ticket.model';
import {TicketService} from '../../../shared/service/ticket.service';

@Component({
  selector: 'app-ticket-delete',
  templateUrl: './ticket-delete.component.html',
  styleUrls: ['./ticket-delete.component.css']
})
export class TicketDeleteComponent implements OnInit {

  ticket: TicketModel;

  constructor(public modal: NgbActiveModal,
              private ticketService: TicketService,
              private eventManagement: EventManagement) { }

  ngOnInit(): void {
  }

  delete() {
    this.ticketService.delete(this.ticket.id).subscribe(
      () => {
        this.eventManagement.broadcast('UPDATE_TICKET');
        this.modal.close();
      }, error => console.log(error)
    );
  }

}
