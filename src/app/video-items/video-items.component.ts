import {
  Component,
  Input,
} from '@angular/core';

import items from '../items';
import { Sort } from '../shared/interfaces/sort.interface';
import SearchItem from './models/search-item.model';

@Component({
  selector: 'app-video-items',
  templateUrl: './video-items.component.html',
  styleUrls: ['./video-items.component.scss'],
})
export default class VideoItemsComponent {
  @Input() searchPhrase: string = '';

  sortParam: string = '';

  sortDirection: string = '';

  sortKeyphrase: string = '';

  @Input()
  set sort(newSort: Sort) {
    this.sortParam = newSort.sortParam;
    this.sortDirection = newSort.direction;
    this.sortKeyphrase = newSort.keyphrase;
  }

  videos: SearchItem[] = items;
}
