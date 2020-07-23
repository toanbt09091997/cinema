import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {LoginComponent} from './pages/login/login.component';
import {DetailsGuardService} from './shared/service/details-guard.service';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';



const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full' ,
  },
  {
    path: 'ticket',
    component: AdminLayoutComponent,
    canActivate: [DetailsGuardService],
    loadChildren: () => {
      return import('../app/pages/ticket/ticket.module').then(m => m.TicketModule);
    }
  },
  {
    path: 'order',
    component: AdminLayoutComponent,
    loadChildren: () => {
      return import('../app/pages/order/order.module').then(m => m.OrderModule);
    }
  },
  {
    path: 'room',
    component: AdminLayoutComponent,
    canActivate: [DetailsGuardService],
    loadChildren: () => {
      return import('../app/pages/room/room.module').then(m => m.RoomModule);
    }
  },
  {
    path: 'showtime',
    component: AdminLayoutComponent,
    canActivate: [DetailsGuardService],
    loadChildren: () => {
      return import('../app/pages/showtime/showtime.module').then(m => m.ShowtimeModule);
    }
  },
  {
    path: 'manage',
    component: AdminLayoutComponent,
    canActivate: [DetailsGuardService],
    loadChildren: () => {
      return import('../app/pages/manage/manage.module').then(m => m.ManageModule);
    }
  },
  {
    path: 'cinema',
    component: AdminLayoutComponent,
    canActivate: [DetailsGuardService],
    loadChildren: () => {
      return import('../app/pages/cinema/cinema.module').then(m => m.CinemaModule);
    }
  },
  {
    path: 'movie',
    component: AdminLayoutComponent,
    loadChildren: () => {
      return import('../app/pages/movie/movie.module').then(m => m.MovieModule);
    }
  },
  {
    path: 'seat',
    component: AdminLayoutComponent,
    canActivate: [DetailsGuardService],
    loadChildren: () => {
      return import('../app/pages/seat/seat.module').then(m => m.SeatModule);
    }
  },
  {
    path: 'refundTicket',
    component: AdminLayoutComponent,
    canActivate: [DetailsGuardService],
    loadChildren: () => {
      return import('../app/pages/RefundTicket/refundticket.module').then(m => m.RefundticketModule);
    }
  },



  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
