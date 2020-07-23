import { Injectable } from '@angular/core';
import {TokenStorageService} from './token-storage.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsGuardService implements CanActivate{
  constructor(private auth: TokenStorageService ,
              private router: Router) { }

  // tslint:disable-next-line:max-line-length
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.getToken() == null) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
