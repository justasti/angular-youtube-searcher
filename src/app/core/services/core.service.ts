import { Injectable } from '@angular/core';
import { Sort } from 'src/app/shared/interfaces/sort.interface';

@Injectable({
  providedIn: 'root',
})
export default class CoreService {
  // constructor() { }

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
