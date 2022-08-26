/* eslint-disable class-methods-use-this */
import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import CoreService from 'src/app/core/services/core.service';
import Enums from '../../enums/enums.enum';
import { Sort } from '../../interfaces/sort.interface';

@Component({
  selector: 'app-sort-toolbar',
  templateUrl: './sort-toolbar.component.html',
  styleUrls: ['./sort-toolbar.component.scss'],
})
export default class SortToolbarComponent {
  constructor(private coreService: CoreService) {}

  // @Output() sort = new EventEmitter<Sort>();

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

  // sortByWord() {
  //   this.sort.emit({
  //     sortParam: Enums.WORD,
  //     direction: this.direction,
  //     keyphrase: this.sortKeyphrase,
  //   });
  // }
}
