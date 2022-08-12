/* eslint-disable class-methods-use-this */
import { Component, Input } from '@angular/core';
import Enums from 'src/app/shared/enums/enums.enum';
import SearchItem from '../models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent {
  @Input()
    item!: SearchItem;

  getBorderColor(item: SearchItem): {} {
    let color = '';
    const MILISECONDS_PER_DAY = 86400000;
    const currentDate = new Date().toISOString();
    const dateDifference = Date.parse(currentDate) - Date.parse(item.snippet.publishedAt);
    if (dateDifference / MILISECONDS_PER_DAY > 182) {
      color = Enums.RED;
    } else if (dateDifference / MILISECONDS_PER_DAY > 30) {
      color = Enums.YELLOW;
    } else if (dateDifference / MILISECONDS_PER_DAY > 7) {
      color = Enums.GREEN;
    } else {
      color = Enums.BLUE;
    }
    return color;
  }
}
