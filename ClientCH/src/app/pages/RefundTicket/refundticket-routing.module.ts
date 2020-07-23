import {Injectable, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';

import {Observable} from 'rxjs';


import {RefundticketService} from '../../shared/service/refundticket.service';
import {RefundTicketListComponent} from './refund-ticket-list/refund-ticket-list.component';
import {RefundTicketCreateComponent} from './refund-ticket-create/refund-ticket-create.component';
import {RefundTicketModel} from '../../model/refundticket.model';


@Injectable({providedIn: 'root'})
export class RefundTicketResolver implements Resolve<RefundTicketModel> {
  constructor(private refundticketService: RefundticketService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RefundTicketModel>
    | Promise<RefundTicketModel> | RefundTicketModel {
    const id = route.params.id ? route.params.id : null;
    return this.refundticketService.findOne(id);
  }
}

const routes: Routes = [
  {
    path: '',
    component: RefundTicketListComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: RefundTicketCreateComponent,
  },
  {
    path: 'update/:id',
    component: RefundTicketCreateComponent,
    resolve: {
      refundTicket: RefundTicketResolver
    }
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefundticketRoutingModule { }
