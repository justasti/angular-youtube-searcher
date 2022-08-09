/* eslint-disable class-methods-use-this */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-toolbar',
  templateUrl: './sort-toolbar.component.html',
  styleUrls: ['./sort-toolbar.component.scss'],
})
export default class SortToolbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSort(event: MouseEvent) {
    const target = event.target as HTMLTextAreaElement;
    return target;
  }
}
