import { Component, OnInit } from '@angular/core';
import {RefundTicketModel} from '../../../model/refundticket.model';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {EventManagement} from '../../../shared/service/event.management';
import {RefundticketService} from '../../../shared/service/refundticket.service';

@Component({
  selector: 'app-refundticket-delete',
  templateUrl: './refundticket-delete.component.html',
  styleUrls: ['./refundticket-delete.component.css']
})
export class RefundticketDeleteComponent implements OnInit {

  refundTicket: RefundTicketModel;

  constructor(public modal: NgbActiveModal,
              private refundticketService: RefundticketService,
              private eventManagement: EventManagement) { }

  ngOnInit(): void {
  }

  delete() {
    this.refundticketService.delete(this.refundTicket.id).subscribe(
      () => {
        this.eventManagement.broadcast('UPDATE_REFUNDTICKET');
        this.modal.close();
      }, error => console.log(error)
    );
  }

}
