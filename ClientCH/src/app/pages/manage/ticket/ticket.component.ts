import {Component, Input, OnInit} from '@angular/core';
import {MovieModel} from '../../../model/movie.model';
import {TicketModel} from '../../../model/ticket.model';
import {TicketService} from '../../../shared/service/ticket.service';
import {OrderService} from '../../../shared/service/order.service';
import {OrderModel} from '../../../model/order.model';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  error: string;
  success: string;
  @Input() ticket: TicketModel;
  @Input() ticketsuccess: TicketModel;
  @Input() order: OrderModel;
  @Input() listSeat: { id: number, tenghe: string, loaighe: number, status: number, createdAt: Date, updateAt: Date }[]
  // tslint:disable-next-line:max-line-length
  // @Input() listTicket: { giave: number, tenphim: string, idGhe: number, marap: number, timeStart: Date, timeEnd: Date, lichchieu: number }[];

  constructor(private ticketService: TicketService,
              private orderService: OrderService,
              private router: Router) { }

  ngOnInit(): void {
    this.success = null;
    this.ticketsuccess = null;
  }

  compTicket() {
    this.order.sove = this.listSeat.length;
    const random = Math.floor(Math.random() * (99999 - 10000)) + 10000;
    this.order.orderid = random;
    this.orderService.create(this.order).subscribe(
      (data) => {
        if (data == null) {
          this.error = 'co loi xay ra';
          this.ticketsuccess = null;
        } else {
          this.ticket.order = {orderid: data.orderid};
          this.listSeat.forEach( (tck) => {
            this.ticket.idGhe = tck.id;
            if (tck.loaighe === 1) {
              this.ticket.giave = this.ticket.giave + 100000;
            } else {
              this.ticket.giave = this.ticket.giave + 50000;
            }
            this.ticketService.create(this.ticket).subscribe(
              (data1) => {
                if (data1 == null) {
                  this.error = 'co loi xay ra';
                } else {
                  this.success = 'Dat ve thanh cong. Id ve la: ';
                  // window.location.reload();
                  this.router.navigate(['order/detail', data.orderid]);
                }
              },
              error => console.log(error));
            this.ticketsuccess = data;
            this.success = 'Dat ve thanh cong. Id don hang la: ';
          });
        }
      },
      error => console.log(error));
  }
}
