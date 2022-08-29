/* eslint-disable class-methods-use-this */
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subject, debounceTime } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import HttpRequestItem from 'src/app/shared/interfaces/http-request-item.interface';
import SearchService from 'src/app/youtube/services/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export default class SearchBarComponent implements OnInit {
  constructor(
    private router: Router,
    private searchService: SearchService,
  ) {
    this.searchChanged.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe((model: string) => {
      this.searchPhrase = model;
      this.onToggleSearch();
    });
  }

  @Output() toggleFilters = new EventEmitter<boolean>();

  searchPhrase: string = '';

  showFilters = false;

  showResults: boolean = false;

  httpResponse!: HttpRequestItem[];

  searchChanged: Subject<string> = new Subject<string>();

  onToggleFilters() {
    this.showFilters = !this.showFilters;
    this.toggleFilters.emit(this.showFilters);
  }

  changed(text: string) {
    this.searchChanged.next(text);
  }

  onToggleSearch() {
    this.changed(this.searchPhrase);
    this.searchService.searchPhrase = this.searchPhrase;
    this.searchService.showSearchResults();
    this.router.navigate(['/videos'], { queryParams: { q: this.searchPhrase } });
    if (this.showResults) {
      return this.searchService.getVideos(this.searchPhrase)
        .subscribe((response) => {
          this.httpResponse = response as unknown as HttpRequestItem[];
          this.searchService.setData(response as unknown as HttpRequestItem[]);
        });
    }
    return [];
  }

  ngOnInit(): void {
    this.searchService.showResults$.subscribe((response) => {
      this.showResults = response;
    });
  }
}
