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
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export default class SearchBarComponent implements OnInit {
  @Output() toggleFilters = new EventEmitter<boolean>();

  @Output() toggleSearchResults = new EventEmitter<boolean>();

  @Output() search = new EventEmitter<string>();

  searchPhrase: string = '';

  showFilters = false;

  constructor() {}

  ngOnInit(): void {}

  onToggleFilters() {
    this.showFilters = !this.showFilters;
    this.toggleFilters.emit(this.showFilters);
  }

  onToggleSearch() {
    this.toggleSearchResults.emit(true);
    this.search.emit(this.searchPhrase);
  }
}
