import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RoomCreateComponent} from './room-create/room-create.component';
import {RoomDeleteComponent} from './room-delete/room-delete.component';
import {RoomListComponent} from './room-list/room-list.component';
import {RoomRoutingModule} from './room-routing.module';



@NgModule({
  declarations: [RoomCreateComponent, RoomDeleteComponent, RoomListComponent],
  exports: [RoomCreateComponent, RoomListComponent],
  imports: [
    CommonModule,
    RoomRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RoomModule { }

