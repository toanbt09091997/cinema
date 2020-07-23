import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { CinemaModule } from './pages/cinema/cinema.module';
import { ManageRoutingModule } from './pages/manage/manage-routing.module';
import { ManageModule } from './pages/manage/manage.module';
import { RefundTicketListComponent } from './pages/RefundTicket/refund-ticket-list/refund-ticket-list.component';
import { RefundTicketCreateComponent } from './pages/RefundTicket/refund-ticket-create/refund-ticket-create.component';
import { RefundticketDeleteComponent } from './pages/RefundTicket/refundticket-delete/refundticket-delete.component';
import {BrowserModule} from '@angular/platform-browser';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { BoardAdminComponent } from './pages/board-admin/board-admin.component';
import { BoardUserComponent } from './pages/board-user/board-user.component';
import { BoardModeratorComponent } from './pages/board-moderator/board-moderator.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';

import {authInterceptorProviders} from './shared/helpers/auth.interceptor';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import { RefundticketModule } from './pages/RefundTicket/refundticket.module';
import { RefundticketRoutingModule } from './pages/RefundTicket/refundticket-routing.module';
import {LocalStorageService} from './shared/service/local-storage.service';
import { RoomDeleteComponent } from './pages/room/room-delete/room-delete.component';
import { MovieRoutingModule } from './pages/movie/movie-routing.module';
import { MovieModule } from './pages/movie/movie.module';
// @ts-ignore
import { OrderRoutingModule } from './pages/order-routing.module';
// @ts-ignore
import { OrderModule } from './pages/order.module';
// @ts-ignore
import { AppCreateModule } from './pages/order/app-create.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {DetailsGuardService} from './shared/service/details-guard.service';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    RefundticketModule,
    RefundticketRoutingModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    CinemaModule,
    ManageRoutingModule,
    ManageModule,
    ReactiveFormsModule,
    MovieRoutingModule,
    MovieModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    LoginComponent,
    RegisterComponent,
    RoomDeleteComponent,
    PageNotFoundComponent
  ],
  providers: [authInterceptorProviders, LocalStorageService, DetailsGuardService],

  bootstrap: [AppComponent]
})
export class AppModule {
}
