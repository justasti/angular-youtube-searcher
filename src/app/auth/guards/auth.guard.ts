/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
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
    return this.authService.isAuthenticated$.pipe(tap((response) => {
      if (!response) {
        this.router.navigate([''], { queryParams: { returnUrl: state.url } });
      }
    }));
  }
}
