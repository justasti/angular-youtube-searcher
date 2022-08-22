import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  loggedIn: boolean = false;

  private username: string = '';

  login(username: string, password: string): void {
    if (username === 'user' && password === 'pass') {
      this.username = username;
      localStorage.setItem(this.username, 'faketoken');
      this.loggedIn = true;
    } else {
      throw new Error('wrong username or password');
    }
  }

  logout(): void {
    localStorage.removeItem(this.username);
    this.loggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}
