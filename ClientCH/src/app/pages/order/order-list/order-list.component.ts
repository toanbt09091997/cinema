import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../../shared/service/order.service';
import {OrderModel} from '../../../model/order.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: OrderModel[];
  constructor(private orderService: OrderService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.orderService.fetch().subscribe(orders => {
      this.orders = orders;
    }, error => console.log(error));
  }
}
