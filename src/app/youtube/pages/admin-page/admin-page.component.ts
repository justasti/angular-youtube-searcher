/* eslint-disable class-methods-use-this */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export default class AdminPageComponent implements OnInit {
  newCardForm: FormGroup = new FormGroup({});

  titleErrorText: string = 'Please enter a title';

  descriptionErrorText: string = '';

  imgUrlErrorText: string = 'Please enter an image URL';

  videoUrlErrorText: string = 'Please enter a video URL';

  formIsValid: string = '';

  validUrlPattern: string = '((http|https)://)(www.|)[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)';

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
    });

    this.newCardForm.get('title')?.valueChanges.subscribe(() => {
      const title = this.newCardForm.get('title');

      if (title?.hasError('required')) {
        this.titleErrorText = 'Please enter a title';
      } else if (title?.hasError('minlength')) {
        this.titleErrorText = 'A title should be at least 3 characters long';
      } else if (title?.hasError('maxlength')) {
        this.titleErrorText = 'A title should be no longer than 20 characters';
      }
    });

    this.newCardForm.get('description')?.valueChanges.subscribe(() => {
      const description = this.newCardForm.get('description');

      if (description?.hasError('maxlength')) {
        this.descriptionErrorText = 'A description shouldn\'t be longer than 255 characters';
      }
    });

    this.newCardForm.get('imgUrl')?.valueChanges.subscribe(() => {
      const imgUrl = this.newCardForm.get('imgUrl');

      if (imgUrl?.hasError('required')) {
        this.imgUrlErrorText = 'Please enter an image URL';
      } else if (imgUrl?.hasError('pattern')) {
        this.imgUrlErrorText = 'Please enter a valid image URL (i.e. https://www.example.com)';
      }
    });

    this.newCardForm.get('videoUrl')?.valueChanges.subscribe(() => {
      const videoUrl = this.newCardForm.get('videoUrl');

      if (videoUrl?.hasError('required')) {
        this.videoUrlErrorText = 'Please enter a video URL';
      } else if (videoUrl?.hasError('pattern')) {
        this.videoUrlErrorText = 'Please enter a valid video URL (i.e. https://www.example.com)';
      }
    });
  }

  onFormSubmit() {
    if (this.newCardForm.valid) {
      this.newCardForm.reset();
      this.formIsValid = 'true';
    } else {
      this.formIsValid = 'false';
      this.newCardForm.markAllAsTouched();
    }
  }
}
