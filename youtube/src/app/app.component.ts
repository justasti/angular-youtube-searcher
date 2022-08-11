import { Component, Output } from '@angular/core';

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

  @Output() sortBy: { sortParam: string, direction: string } = { sortParam: '', direction: '' };

  onToggleFilters() {
    this.showFilters = !this.showFilters;
  }

  onToggleSearchResults(event: boolean) {
    this.showSearchResults = event;
  }

  onSearch(event: string) {
    this.searchPhrase = event;
  }

  onSort(event: { sortParam: string, direction: string }) {
    this.sortBy = event;
  }
}
