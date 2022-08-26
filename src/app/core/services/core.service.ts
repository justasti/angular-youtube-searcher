import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
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

  onSort$ = new Subject<Sort>();

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
    this.onSort$.next(this.sortBy);
  }
}
