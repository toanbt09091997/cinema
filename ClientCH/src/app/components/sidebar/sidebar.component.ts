import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TokenStorageService} from "../../shared/service/token-storage.service";

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/cinema', title: 'Cinema',  icon:'ni-tv-2 text-pink', class: '' },
    { path: '/manage', title: 'Manage',  icon: 'ni-settings text-primary', class: '' },
    { path: '/order', title: 'Order',  icon:'ni-tv-2 text-pink', class: '' },
    { path: '/showtime' , title: 'Showtime',  icon:'ni-calendar-grid-58 text-green', class: '' },
    { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/seat' , title: 'Seat',  icon:'ni-box-2 text-pink', class: '' },
    { path: '/ticket' , title: 'Ticket',  icon:'ni-box-2 text-pink', class: '' },
    { path: '/movie', title: 'Movie',  icon:'ni-tv-2 text-pink', class: '' },
    { path: '/refundTicket', title: 'RefundTicket',  icon:'ni-tv-2 text-pink', class: '' }];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isLoggedIn = false;
  showAdmin = false;
  showModeratorBoard = false;
  showUser=false;
  public menuItems: any[];
  public isCollapsed = true;
  private roles: string[];


  constructor(private router: Router,

  private tokenStorageService : TokenStorageService) { }


  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.isLoggedIn = true;
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showUser = this.roles.includes('ROLE_USER');
      this.showAdmin = this.roles.includes('ROLE_ADMIN');
   }
}
}
