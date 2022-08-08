/* eslint-disable class-methods-use-this */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Component, Input, OnInit } from '@angular/core';
import SearchItem from '../search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent implements OnInit {
  @Input()
    item!: SearchItem;

  constructor() {}

  ngOnInit(): void {}

  getBorderColor(item: SearchItem): {} {
    let color = '';
    const currentDate = new Date().toISOString();
    const dateDifference = Date.parse(currentDate) - Date.parse(item.snippet.publishedAt);
    if (dateDifference / 86400000 > 182) {
      color = 'red';
    } else if (dateDifference / 86400000 > 30) {
      color = 'yellow';
    } else if (dateDifference / 86400000 > 7) {
      color = 'green';
    } else {
      color = 'blue';
    }
    return { borderBottom: `7px ${color} solid` };
  }
}
