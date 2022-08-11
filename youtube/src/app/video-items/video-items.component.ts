/* eslint-disable class-methods-use-this */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import {
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';

import items from '../items';

@Component({
  selector: 'app-video-items',
  templateUrl: './video-items.component.html',
  styleUrls: ['./video-items.component.scss'],
})
export default class VideoItemsComponent implements OnInit, OnChanges {
  @Input() sortBy: { sortParam: string, direction: string, keyphrase: string } = { sortParam: '', direction: 'asc', keyphrase: '' };

  @Input() searchPhrase: string = '';

  sortParam = '';

  sortDirection = '';

  sortKeyphrase = '';

  videos = items;

  constructor() {}

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.sortParam = this.sortBy.sortParam;
    this.sortDirection = this.sortBy.direction;
    this.sortKeyphrase = this.sortBy.keyphrase;
  }
}
