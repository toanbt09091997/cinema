import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ManageComponent} from './manage/manage.component';
import {ManageRoutingModule} from './manage-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MovieListComponent } from './movie-list/movie-list.component';
import { RoomListComponent } from './room-list/room-list.component';
import { SeatListComponent } from './seat-list/seat-list.component';
import {ComponentsModule} from '../../components/components.module';
import {IgxDropDownModule, IgxToggleModule} from 'igniteui-angular';
import { TicketComponent } from './ticket/ticket.component';




@NgModule({
  declarations: [ManageComponent, MovieListComponent, RoomListComponent, SeatListComponent, TicketComponent],
  imports: [
    CommonModule,
    ManageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    IgxDropDownModule,
    IgxToggleModule,
  ]
})
export class ManageModule { }
