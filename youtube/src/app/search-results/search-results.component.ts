/* eslint-disable class-methods-use-this */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Component, Input, OnInit } from '@angular/core';
import items from '../items';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})

export default class SearchResultsComponent implements OnInit {
  videos = items;
  @Input() searchPhrase: string = '';

  constructor() {}

  ngOnInit(): void {}
}
