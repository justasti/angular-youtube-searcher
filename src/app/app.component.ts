import { Component } from '@angular/core';
import { Sort } from './shared/interfaces/sort.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  title = 'youtube';

  searchPhrase: string = '';

  showFilters: boolean = false;

  showSearchResults: boolean = false;

  sortBy: Sort = { sortParam: '', direction: '', keyphrase: '' };

  onToggleFilters() {
    this.showFilters = !this.showFilters;
  }

  onToggleSearchResults(event: boolean) {
    this.showSearchResults = event;
  }

  onSearch(event: string) {
    this.searchPhrase = event;
  }

  onSort(event: { sortParam: string, direction: string, keyphrase: string }) {
    this.sortBy = event;
  }
}
