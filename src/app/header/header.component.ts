/* eslint-disable class-methods-use-this */
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  showFilters: boolean = false;

  @Output() toggleFilters = new EventEmitter<boolean>();

  @Output() toggleSearchResults = new EventEmitter<boolean>();

  @Output() search = new EventEmitter<string>();

  @Input() searchPhrase: string = '';

  onToggleFilters(event: boolean) {
    this.showFilters = event;
    this.toggleFilters.emit(this.showFilters);
  }

  onToggleSearchResults() {
    this.toggleSearchResults.emit(true);
  }

  onSearch(event: string) {
    this.searchPhrase = event;
    this.search.emit(this.searchPhrase);
  }
}
