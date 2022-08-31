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

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export default class AdminPageComponent implements OnInit {
  newCardForm: FormGroup = new FormGroup({});

  formIsValid: string = '';

  validUrlPattern: string = '((http|https)://)(www.|)[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)';

  onFormSubmit() {
    this.newCardForm.markAllAsTouched();
    if (this.newCardForm.valid) {
      this.newCardForm.reset();
      this.formIsValid = 'true';
    } else {
      this.formIsValid = 'false';
    }
  }

  checkFormFields(field: string) {
    const fieldToCheck = this.newCardForm.get(field);
    switch (field) {
      case 'title':
        if (fieldToCheck?.hasError('required')) return 'required';
        if (fieldToCheck?.hasError('minlength')) return 'short';
        if (fieldToCheck?.hasError('maxlength')) return 'long';
        break;
      case 'description':
        if (fieldToCheck?.hasError('maxlength')) return 'long';
        break;
      case 'imgUrl':
        if (fieldToCheck?.hasError('required')) return 'required';
        if (fieldToCheck?.hasError('pattern')) return 'invalid';
        break;
      case 'videoUrl':
        if (fieldToCheck?.hasError('required')) return 'required';
        if (fieldToCheck?.hasError('pattern')) return 'invalid';
        break;
      case 'date':
        if (fieldToCheck?.hasError('required')) return 'required';
        if (fieldToCheck?.hasError('futureDate')) return 'future';
        break;
      default:
        break;
    }
    return false;
  }

  displayModal(modal: string) {
    return !this.newCardForm.get(modal)?.valid && this.newCardForm.get(modal)?.touched;
  }

  checkFutureDate(): ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => (new Date()
      .toISOString() > control.value ? null : { futureDate: true });
  }

  ngOnInit() {
    this.newCardForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      description: new FormControl(null, Validators.maxLength(255)),
      imgUrl: new FormControl(null, [Validators.required,
        Validators.pattern(this.validUrlPattern)]),
      videoUrl: new FormControl(null, [Validators.required,
        Validators.pattern(this.validUrlPattern)]),
      date: new FormControl(null, [Validators.required, this.checkFutureDate()]),
    });
  }
}
