import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import AuthService from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export default class LoginPageComponent implements OnInit {
  username: string = '';

  password: string = '';

  returnUrl!: string;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // get return url from route parameters or default to '/main'
    this.route.queryParams.subscribe((params: Params) => {
      this.returnUrl = params['returnUrl'] || '/videos';
    });
  }

  onSubmit() {
    try {
      this.authService.login(this.username, this.password);
      this.router.navigate([this.returnUrl]);
    } catch (error) {
      alert(error); // eslint-disable-line no-alert
    }
  }
}
