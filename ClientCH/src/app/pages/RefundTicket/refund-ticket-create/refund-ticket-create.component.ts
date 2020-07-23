import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {RefundticketService} from '../../../shared/service/refundticket.service';
import {TicketModel} from '../../../model/ticket.model';
import {TicketService} from '../../../shared/service/ticket.service';

@Component({
  selector: 'app-refund-ticket-create',
  templateUrl: './refund-ticket-create.component.html',
  styleUrls: ['./refund-ticket-create.component.css']
})
export class RefundTicketCreateComponent implements OnInit {

  form: FormGroup;
  isUpdate: any = false;
  error: string;
  tickets: TicketModel[];
  ticketss: TicketModel[];
  ticketId: number;

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private refundticketService: RefundticketService,
              private ticketService: TicketService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: ['', Validators.required],
      tenphim: ['', Validators.required],
      idGhe: ['', Validators.required],
      marap: ['', Validators.required],
      lichchieu: ['', Validators.required],
      giave: ['', Validators.required],
      timeStart: ['', Validators.required],
      timeEnd: ['', Validators.required],
      khunggio: ['', Validators.required],
      giotra: ['', Validators.required]
    });



    this.loadTickets();
    this.getTickets();
  }

  doSubmit() {
    const reTicket = this.form.value;
    console.log(reTicket)

    this.ticketService.reTicket(reTicket).subscribe(
      () => this.router.navigateByUrl('/ticket'),
      error => console.log(error));

  }
  getTickets() {
    this.ticketService.findByTicket(this.ticketId).subscribe(ticket => {
      this.ticketss = ticket;
    }, error => console.log(error));
  }

  loadTickets() {
    this.ticketService.fetch().subscribe(ticket => {
      this.tickets = ticket;
    }, error => console.log(error));
  }


}
