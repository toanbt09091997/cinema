import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TicketModel} from '../../../model/ticket.model';
import {OrderService} from '../../../shared/service/order.service';
import {OrderModel} from '../../../model/order.model';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit {
  tickets: TicketModel[];
  id: any;
  order: OrderModel;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private orderService: OrderService) { }

  ngOnInit(): void {
    this.route.data.subscribe(v => this.tickets = v.ticket);
    this.route.params
      .subscribe(params => {
        this.id = params['id'];
      });
    this.orderService.findOne(this.id).subscribe(order => {
      this.order = order;
    }, error => console.log(error));
  }
}
