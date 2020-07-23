import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShowtimeCreateComponent } from './showtime-create/showtime-create.component';
import {ShowtimeListComponent} from './showtime-list/showtime-list.component';
import {ShowtimeDeleteComponent} from './showtime-delete/showtime-delete.component';
import {ShowtimeRoutingModule} from './showtime-routing.module';



@NgModule({
  declarations: [ShowtimeCreateComponent, ShowtimeDeleteComponent, ShowtimeListComponent],
  exports: [ShowtimeCreateComponent, ShowtimeListComponent],
  imports: [
    CommonModule,
    ShowtimeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShowtimeModule { }
