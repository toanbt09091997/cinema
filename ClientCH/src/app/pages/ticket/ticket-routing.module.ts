import {Injectable, NgModule} from '@angular/core';

import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';

import {Observable} from 'rxjs';

import {TicketModel} from '../../model/ticket.model';
import {TicketService} from '../../shared/service/ticket.service';
import {TicketListComponent} from './ticket-list/ticket-list.component';
import {TicketCreateComponent} from './ticket-create/ticket-create.component';


@Injectable({providedIn: 'root'})
export class TicketResolver implements Resolve<TicketModel> {
  constructor(private ticketService: TicketService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TicketModel>
    | Promise<TicketModel> | TicketModel {
    const id = route.params.id ? route.params.id : null;
    return this.ticketService.findOne(id);
  }
}

const routes: Routes = [
  {
    path: '',
    component: TicketListComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: TicketCreateComponent
  },
  {
    path: 'update/:id',
    component: TicketCreateComponent,
    resolve: {
      ticket: TicketResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
