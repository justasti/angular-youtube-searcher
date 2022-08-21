/* eslint-disable class-methods-use-this */
import { Component, OnInit } from '@angular/core';
import LoginService from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export default class UserInfoComponent implements OnInit {
  buttonText: string = '';

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.buttonText = this.loginService.loggedIn ? 'Log Out' : 'Log in';
  }
}
