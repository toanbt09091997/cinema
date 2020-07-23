import {Injectable, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {ManageComponent} from '../manage/manage/manage.component';
import {OrderListComponent} from './order-list/order-list.component';
import {CinemaModel} from '../../model/cinema.model';
import {CinemaService} from '../../shared/service/cinema.service';
import {Observable} from 'rxjs';
import {TicketModel} from '../../model/ticket.model';
import {TicketService} from '../../shared/service/ticket.service';
import {OrderdetailComponent} from './orderdetail/orderdetail.component';

@Injectable({providedIn: 'root'})
export class TicketResolver implements Resolve<TicketModel[]> {
  constructor(private ticketService: TicketService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TicketModel[]>
    | Promise<TicketModel[]> | TicketModel[] {
    const id = route.params.id ? route.params.id : null;
    return this.ticketService.findbyOrdid(id);
  }
}

const routes: Routes = [
  {
    path: '',
    component: OrderListComponent,
    pathMatch: 'full'
  },
  {
    path: 'hehe',
    component: OrderListComponent,
  },
  {
    path: 'detail/:id',
    component: OrderdetailComponent,
    resolve: {
      ticket: TicketResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
