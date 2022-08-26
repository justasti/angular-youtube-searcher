import { Component } from '@angular/core';
import { Sort } from './shared/interfaces/sort.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  showFilters: boolean = false;

  // sortBy: Sort = { sortParam: '', direction: '', keyphrase: '' };

  onToggleFilters() {
    this.showFilters = !this.showFilters;
  }

  // onSort(event: { sortParam: string, direction: string, keyphrase: string }) {
  //   this.sortBy = event;
  // }
}
