import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SeatListComponent} from './seat-list/seat-list.component';
import {SeatDeleteComponent} from './seat-delete/seat-delete.component';
import {SeatCreatComponent} from './seat-creat/seat-creat.component';
import {SeatRoutingModule} from './seat-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2SearchPipeModule} from "ng2-search-filter";


@NgModule({
  declarations: [SeatCreatComponent, SeatDeleteComponent, SeatListComponent],
  exports: [SeatCreatComponent, SeatListComponent],
    imports: [
        CommonModule,
        SeatRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2SearchPipeModule
    ]
})
export class SeatModule { }
