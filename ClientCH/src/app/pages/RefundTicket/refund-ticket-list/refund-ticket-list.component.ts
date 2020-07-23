import { Component, OnInit } from '@angular/core';

import {EventManagement} from "../../../shared/service/event.management";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

import {RefundticketService} from "../../../shared/service/refundticket.service";

import {RefundticketDeleteComponent} from "../refundticket-delete/refundticket-delete.component";
import {RefundTicketModel} from '../../../model/refundticket.model';


@Component({
  selector: 'app-refund-ticket-list',
  templateUrl: './refund-ticket-list.component.html',
  styleUrls: ['./refund-ticket-list.component.css']
})
export class RefundTicketListComponent implements OnInit {

  ReTickets: RefundTicketModel[] = [];
  searchText;
  constructor(private seatService: RefundticketService,
              private eventManagement: EventManagement,
              public modal: NgbModal) { }

  ngOnInit(): void {
    this.loadSeats();
    this.eventManagement.subscribe('UPDATE_REFUNDTICKET', () => this.loadSeats());
  }
  loadSeats() {
    this.seatService.fetch().subscribe(reTicket => {
      this.ReTickets = reTicket;
    }, error => console.log(error));
  }

  goToDelete(refundTicket: RefundTicketModel) {
    const modalRef = this.modal.open(RefundticketDeleteComponent);
    modalRef.componentInstance.refundTicket = refundTicket;
  }

}
