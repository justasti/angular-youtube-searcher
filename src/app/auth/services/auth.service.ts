import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  loggedIn: boolean = false;

  private username: string = '';

  public isAuthenticated$ = new Subject<boolean>();

  login(username: string, password: string): void {
    if (username === 'user' && password === 'pass') {
      this.username = username;
      localStorage.setItem('token', this.username);
      this.loggedIn = true;
      this.isAuthenticated$.next(this.loggedIn);
    } else {
      throw new Error('wrong username or password');
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedIn = false;
    this.isAuthenticated$.next(this.loggedIn);
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}
