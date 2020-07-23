import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CinemaCreateComponent} from './cinema-create/cinema-create.component';
import {CinemaDeleteComponent} from './cinema-delete/cinema-delete.component';
import {CinemaListComponent} from './cinema-list/cinema-list.component';
import {CinemaRoutingModule} from './cinema-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material';



@NgModule({
  declarations: [CinemaCreateComponent, CinemaDeleteComponent, CinemaListComponent],
  exports: [CinemaCreateComponent],
    imports: [
        CommonModule,
        CinemaRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatPaginatorModule
    ]
})
export class CinemaModule { }
