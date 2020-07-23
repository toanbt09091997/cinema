import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SeatCreatComponent} from '../seat/seat-creat/seat-creat.component';
import {SeatDeleteComponent} from '../seat/seat-delete/seat-delete.component';
import {SeatListComponent} from '../seat/seat-list/seat-list.component';
import {SeatRoutingModule} from '../seat/seat-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {RefundTicketCreateComponent} from './refund-ticket-create/refund-ticket-create.component';
import {RefundTicketListComponent} from './refund-ticket-list/refund-ticket-list.component';
import {RefundticketDeleteComponent} from './refundticket-delete/refundticket-delete.component';
import {RefundticketRoutingModule} from './refundticket-routing.module';



@NgModule({
  declarations: [RefundTicketCreateComponent, RefundticketDeleteComponent, RefundTicketListComponent],
  exports: [RefundTicketCreateComponent, RefundTicketListComponent],
  imports: [
    CommonModule,
    RefundticketRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ]
})
export class RefundticketModule { }
