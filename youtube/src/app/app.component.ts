import { Component } from '@angular/core';
import { FilterPipe } from './filter.pipe';

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

  onToggleFilters() {
    this.showFilters = !this.showFilters;
  }

  onToggleSearchResults(event: boolean) {
    this.showSearchResults = event;
  }

  onSearch(event: string) {
    this.searchPhrase = event;
  }
}
