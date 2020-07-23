import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CinemaListComponent} from '../cinema/cinema-list/cinema-list.component';
import {CinemaCreateComponent} from '../cinema/cinema-create/cinema-create.component';
import {CinemaResolver} from '../cinema/cinema-routing.module';
import {ManageComponent} from './manage/manage.component';



const routes: Routes = [
  {
    path: '',
    component: ManageComponent,
    pathMatch: 'full'
  },
  // {
  //   path: 'create',
  //   component: CinemaCreateComponent
  // },
  // {
  //   path: 'update/:id',
  //   component: CinemaCreateComponent,
  //   resolve: {
  //     cinema: CinemaResolver
  //   }
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
