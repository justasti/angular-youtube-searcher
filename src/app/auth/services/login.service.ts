/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export default class LoginService {
  constructor(private router: Router) {}

  loggedIn = false;

  logIn(): void {
    this.loggedIn = true;
    this.router.navigate(['/videos']);
    localStorage.setItem('logged-in', 'true');
  }

  logOut(): void {
    this.loggedIn = false;
    localStorage.setItem('logged-in', 'false');
  }
}
