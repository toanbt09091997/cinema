import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SeatRoutingModule} from '../seat/seat-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {MovieCreateComponent} from './movie-create/movie-create.component';
import {MovieDeleteComponent} from './movie-delete/movie-delete.component';
import {MovieListComponent} from './movie-list/movie-list.component';
import {MovieRoutingModule} from './movie-routing.module';





@NgModule({
  declarations: [MovieCreateComponent, MovieDeleteComponent, MovieListComponent],
  exports: [MovieCreateComponent, MovieListComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ]
})
export class MovieModule { }
