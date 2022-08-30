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

  emailErrorText: string = 'Please enter an email address';

  passwordErrorText: string = 'Please enter a password';

  confirmErrorText: string = 'Please confirm your password';

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

  ngOnInit() {
    this.newUserForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.validEmailPattern),
      ]),
      password: new FormControl(null, [Validators.required, this.checkPasswordStrength()]),
      confirm: new FormControl(null, [Validators.required, this.checkPasswordMatch()]),
    });

    this.newUserForm.get('email')?.valueChanges.subscribe(() => {
      const email = this.newUserForm.get('email');

      if (email?.hasError('required')) {
        this.emailErrorText = 'Please enter an email address';
      } else if (email?.hasError('pattern')) {
        this.emailErrorText = 'Please enter a valid email address';
      }
    });

    this.newUserForm.get('password')?.valueChanges.subscribe(() => {
      const password = this.newUserForm.get('password');

      if (password?.hasError('required')) {
        this.passwordErrorText = 'Please enter a password';
      } else if (password?.hasError('notStrong')) {
        this.passwordErrorText = 'Password is not strong enough.\nStrong password consists of: \n\t⚬ at least 8 characters\n\t⚬ a mixture of both uppercase and lowercase letters\n\t⚬ a mixture of letters and numbers\n\t⚬ inclusion of at least one special character, e.g., ! @ # ? ]';
      }
    });

    this.newUserForm.get('confirm')?.valueChanges.subscribe(() => {
      const confirm = this.newUserForm.get('confirm');

      if (confirm?.hasError('required')) {
        this.confirmErrorText = 'Please confirm your password';
      } else if (confirm?.hasError('noMatch')) {
        this.confirmErrorText = 'Your passwords does not match';
      }
    });
  }
}
