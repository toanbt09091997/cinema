import { Component, OnInit } from '@angular/core';
import {TicketModel} from '../../../model/ticket.model';
import {EventManagement} from '../../../shared/service/event.management';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TicketService} from '../../../shared/service/ticket.service';
import {TicketDeleteComponent} from '../ticket-delete/ticket-delete.component';
import {OrderModel} from '../../../model/order.model';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  tickets: TicketModel[] = [];
  searchText;
  form: FormGroup;
  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private ticketService: TicketService,
              private eventManagement: EventManagement,
              public modal: NgbModal) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      tenphim: ['',Validators.required],
      idghe: ['',Validators.required],
      status: ['',Validators.required]
    });

    this.loadTickets();
    this.eventManagement.subscribe('UPDATE_TICKET', () => this.loadTickets());
  }
  loadTickets() {
    this.ticketService.fetch().subscribe(ticket => {
      this.tickets = ticket;
    }, error => console.log(error));
  }

  goToDelete(ticket: TicketModel) {
    const modalRef = this.modal.open(TicketDeleteComponent);
    modalRef.componentInstance.ticket = ticket;
  }

  doSubmit() {
    const ticket = this.form.value;
    console.log(ticket);
    this.ticketService.findByCinemaAndPhimAndMaghe(ticket).subscribe(ticket =>{
      this.tickets =ticket;

    },error => console.log(error));
  }
}
