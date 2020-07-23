import {Injectable, NgModule} from '@angular/core';

import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';

import {Observable} from 'rxjs';

import {ShowtimeModel} from '../../model/showtime.model';
import {ShowtimeService} from '../../shared/service/showtime.service';
import {ShowtimeListComponent} from './showtime-list/showtime-list.component';
import {ShowtimeCreateComponent} from './showtime-create/showtime-create.component';

@Injectable({providedIn: 'root'})
export class ShowtimeResolver implements Resolve<ShowtimeModel> {
  constructor(private showtimeService: ShowtimeService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ShowtimeModel>
    | Promise<ShowtimeModel> | ShowtimeModel {
    const id = route.params.id ? route.params.id : null;
    return this.showtimeService.findOne(id);
  }
}

const routes: Routes = [
  {
    path: '',
    component: ShowtimeListComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: ShowtimeCreateComponent
  },
  {
    path: 'update/:id',
    component: ShowtimeCreateComponent,
    resolve: {
      showtime: ShowtimeResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowtimeRoutingModule { }
