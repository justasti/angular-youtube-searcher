/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import AuthService from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export default class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
    this.authService.isAuthenticated$.subscribe((response) => { this.authenticated = response; });
  }

  authenticated: boolean = false;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    :Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authenticated) {
      return true;
    }
    this.router.navigate([''], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
