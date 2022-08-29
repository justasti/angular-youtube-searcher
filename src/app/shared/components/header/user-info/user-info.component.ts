/* eslint-disable class-methods-use-this */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import AuthService from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export default class UserInfoComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  loggedIn$!: BehaviorSubject<boolean>;

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
    this.loggedIn$ = this.authService.isAuthenticated$;
  }

  navigateToLogin(): void {
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
    this.loggedIn$ = this.authService.isAuthenticated$;
  }
}
