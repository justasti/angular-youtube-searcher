/* eslint-disable class-methods-use-this */
import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export default class SearchBarComponent {
  @Output() toggleFilters = new EventEmitter<boolean>();

  @Output() toggleSearchResults = new EventEmitter<boolean>();

  @Output() search = new EventEmitter<string>();

  searchPhrase: string = '';

  showFilters = false;

  onToggleFilters() {
    this.showFilters = !this.showFilters;
    this.toggleFilters.emit(this.showFilters);
  }

  onToggleSearch() {
    this.toggleSearchResults.emit(true);
    this.search.emit(this.searchPhrase);
  }
}
