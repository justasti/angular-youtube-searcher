/* eslint-disable class-methods-use-this */
import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import CoreService from 'src/app/core/services/core.service';
import HttpRequestItem from 'src/app/shared/interfaces/http-request-item.interface';
import SearchService from 'src/app/youtube/services/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export default class SearchBarComponent {
  constructor(
    private coreService: CoreService,
    private router: Router,
    private searchService: SearchService,
  ) {}

  @Output() toggleFilters = new EventEmitter<boolean>();

  searchPhrase: string = '';

  showFilters = false;

  httpResponse: HttpRequestItem = {
    etag: '',
    items: [],
    kind: '',
    nextPageToken: '',
    pageInfo: {},
    regionCode: '',
  };

  onToggleFilters() {
    this.showFilters = !this.showFilters;
    this.toggleFilters.emit(this.showFilters);
  }

  onToggleSearch() {
    this.coreService.onSearch(this.searchPhrase);
    this.router.navigate(['/videos'], { queryParams: { q: this.searchPhrase } });
    this.searchService.fetchVideos(this.searchPhrase).subscribe((data) => {
      this.httpResponse = data as HttpRequestItem;
      this.searchService.setData(data as HttpRequestItem);
    });
  }
}
