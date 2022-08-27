import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import LoginPageComponent from './pages/login-page/login-page.component';

@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    LoginPageComponent,
  ],
})
export default class AuthModule { }
