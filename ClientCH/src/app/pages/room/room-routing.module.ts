import {Injectable, NgModule} from '@angular/core';

import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';

import {Observable} from 'rxjs';


import {RoomService} from '../../shared/service/room.service';
import {RoomModel} from '../../model/room.model';
import {RoomListComponent} from './room-list/room-list.component';
import {RoomCreateComponent} from './room-create/room-create.component';



@Injectable({providedIn: 'root'})
export class RoomResolver implements Resolve<RoomModel> {
  constructor(private roomService: RoomService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RoomModel>
    | Promise<RoomModel> | RoomModel {
    const id = route.params.id ? route.params.id : null;
    return this.roomService.findOne(id);
  }
}

const routes: Routes = [
  {
    path: '',
    component: RoomListComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: RoomCreateComponent
  },
  {
    path: 'update/:id',
    component: RoomCreateComponent,
    resolve: {
      room: RoomResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
