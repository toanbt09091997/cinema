import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderCreateComponent } from './order-create/order-create.component';
import {MovieCreateComponent} from '../movie/movie-create/movie-create.component';
import {MovieListComponent} from '../movie/movie-list/movie-list.component';
import {OrderRoutingModule} from './order-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';



@NgModule({
  declarations: [OrderListComponent, OrderCreateComponent, OrderdetailComponent],
  exports: [OrderListComponent, OrderCreateComponent],
  imports: [
    OrderRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ]
})
export class OrderModule { }
