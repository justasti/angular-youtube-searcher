import { Component } from '@angular/core';
import LoginService from '../../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export default class LoginPageComponent {
  constructor(private loginService: LoginService) {}

  loggedIn: string | null = localStorage.getItem('logged-in');

  logUser() {
    if (this.loggedIn === 'true') {
      this.loginService.logOut();
    } else {
      this.loginService.logIn();
    }
  }
}
