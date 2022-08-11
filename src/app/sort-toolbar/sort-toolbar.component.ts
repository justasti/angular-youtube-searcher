/* eslint-disable class-methods-use-this */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-sort-toolbar',
  templateUrl: './sort-toolbar.component.html',
  styleUrls: ['./sort-toolbar.component.scss'],
})
export default class SortToolbarComponent implements OnInit {
  @Output() sort = new EventEmitter<{ sortParam: string, direction: string, keyphrase: string }>();

  direction: string = 'asc';

  sortKeyphrase: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSort(sortBy: string) {
    this.sort.emit({ sortParam: sortBy, direction: this.direction, keyphrase: this.sortKeyphrase });
    this.direction = this.direction === 'asc' ? 'desc' : 'asc';
  }

  sortByWord() {
    this.sort.emit({ sortParam: 'word', direction: this.direction, keyphrase: this.sortKeyphrase });
  }
}
