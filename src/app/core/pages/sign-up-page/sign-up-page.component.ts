/* eslint-disable class-methods-use-this */
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
})
export default class SignUpPageComponent implements OnInit {
  constructor(private router: Router) {}

  newUserForm: FormGroup = new FormGroup({});

  validEmailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  formIsValid: string = '';

  onSubmitForm(): void {
    this.newUserForm.markAllAsTouched();

    if (this.newUserForm.valid) {
      this.newUserForm.reset();
      this.formIsValid = 'true';
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 1000);
    } else {
      this.formIsValid = 'false';
    }
  }

  checkPasswordStrength(): ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
      if (!control.value) return null;

      const hasUpperCase = /[A-Z]+/.test(control.value);
      const hasLowerCase = /[a-z]+/.test(control.value);
      const hasNumeric = /[0-9]+/.test(control.value);
      const hasSpecial = /[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?]/.test(control.value);
      const longEnough = control.value.length > 8;

      const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecial && longEnough;
      return passwordValid ? null : { notStrong: true };
    };
  }

  checkPasswordMatch(): ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
      const password = this.newUserForm.get('password')?.value;
      return password === control.value ? null : { noMatch: true };
    };
  }

  hasError(field: string, error: string): boolean | undefined {
    return this.newUserForm.get(field)?.hasError(error);
  }

  displayErrorMessage(field: string) {
    const control = this.newUserForm.get(field);
    if (control) {
      return !control.valid && control.touched;
    }
    return false;
  }

  ngOnInit() {
    this.newUserForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.validEmailPattern),
      ]),
      password: new FormControl(null, [Validators.required, this.checkPasswordStrength()]),
      confirm: new FormControl(null, [Validators.required, this.checkPasswordMatch()]),
    });
  }
}
