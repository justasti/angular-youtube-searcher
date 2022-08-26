/* eslint-disable class-methods-use-this */
import { Component } from '@angular/core';
import CoreService from 'src/app/core/services/core.service';
import Enums from '../../enums/enums.enum';

@Component({
  selector: 'app-sort-toolbar',
  templateUrl: './sort-toolbar.component.html',
  styleUrls: ['./sort-toolbar.component.scss'],
})
export default class SortToolbarComponent {
  constructor(private coreService: CoreService) {}

  direction: string = Enums.ASC;

  sortKeyphrase: string = '';

  onSort(sortBy: string) {
    this.coreService.onSort({
      sortParam: sortBy,
      direction: this.direction,
      keyphrase: this.sortKeyphrase,
    });
    this.direction = this.direction === Enums.ASC ? Enums.DESC : Enums.ASC;
  }

  sortByWord() {
    this.coreService.onSortByKeyword({
      sortParam: Enums.WORD,
      direction: this.direction,
      keyphrase: this.sortKeyphrase,
    });
  }
}
