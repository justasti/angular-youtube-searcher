import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import Enums from 'src/app/shared/enums/enums.enum';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  private username: string = '';

  public isAuthenticated$ = new BehaviorSubject<boolean>(localStorage
    .getItem(Enums.TOKEN) !== null);

  login(username: string, password: string): void {
    if (username === 'user' && password === 'pass') {
      this.username = username;
      localStorage.setItem('token', this.username);
      this.isAuthenticated$.next(true);
    } else {
      throw new Error('wrong username or password');
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isAuthenticated$.next(false);
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticated$;
  }
}
