import {Injectable, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from "@angular/router";
import {SeatService} from "../../shared/service/seat.service";
import {SeatModel} from "../../model/seat.model";
import {Observable} from "rxjs";
import {SeatCreatComponent} from "./seat-creat/seat-creat.component";
import {SeatListComponent} from "./seat-list/seat-list.component";


@Injectable({providedIn: 'root'})
export class SeatResolver implements Resolve<SeatModel> {
  constructor(private seatService: SeatService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SeatModel>
    | Promise<SeatModel> | SeatModel {
    const id = route.params.id ? route.params.id : null;
    return this.seatService.findOne(id);
  }
}

const routes: Routes = [
  {
    path: '',
    component: SeatListComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: SeatCreatComponent
  },
  {
    path: 'update/:id',
    component: SeatCreatComponent,
    resolve: {
      seat: SeatResolver
    }
  },
  // {
  //   path: 'detail/:id',
  //   component: ProductCreateComponent,
  //   resolve: {
  //     product: ProductResolver
  //   }
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeatRoutingModule { }
