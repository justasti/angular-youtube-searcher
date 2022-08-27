/* eslint-disable class-methods-use-this */
import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import CoreService from 'src/app/core/services/core.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export default class SearchBarComponent {
  constructor(private coreService: CoreService, private router: Router) {}

  @Output() toggleFilters = new EventEmitter<boolean>();

  searchPhrase: string = '';

  showFilters = false;

  onToggleFilters() {
    this.showFilters = !this.showFilters;
    this.toggleFilters.emit(this.showFilters);
  }

  onToggleSearch() {
    this.coreService.onSearch(this.searchPhrase);
    this.router.navigate(['/videos'], { queryParams: { q: this.searchPhrase } });
  }
}
