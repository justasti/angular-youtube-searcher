/* eslint-disable class-methods-use-this */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent implements OnInit {
  showFilters: boolean = false;

  @Output() toggleFilters = new EventEmitter<boolean>();

  @Output() toggleSearchResults = new EventEmitter<boolean>();

  @Output() search = new EventEmitter<string>();

  @Input() searchPhrase: string = '';

  constructor() { }

  ngOnInit(): void {
  }

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
