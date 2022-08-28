import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import CoreService from 'src/app/core/services/core.service';
import HttpRequestItem from 'src/app/shared/interfaces/http-request-item.interface';
import { Sort } from 'src/app/shared/interfaces/sort.interface';
import SearchService from '../../services/search.service';

@Component({
  selector: 'app-video-items',
  templateUrl: './video-items.component.html',
  styleUrls: ['./video-items.component.scss'],
})
export default class VideoItemsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private coreService: CoreService,
    private searchService: SearchService,
  ) {
    this.searchService.apiData$
      .subscribe((data) => { this.videos = data; console.log(data); });
  }

  searchPhrase: string = '';

  sortParam: string = 'views';

  sortDirection: string = 'desc';

  sortKeyphrase: string = '';

  videos: HttpRequestItem[] = [];

  sort: Sort = { sortParam: '', direction: '', keyphrase: '' };

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.searchPhrase = String(params['q']);
    });
    this.coreService.onSort$.subscribe((res) => {
      this.sortParam = res.sortParam;
      this.sortDirection = res.direction;
      this.sortKeyphrase = res.keyphrase;
    });
    this.coreService.onSortByKeyword$.subscribe((res) => {
      this.sortParam = res.sortParam;
      this.sortDirection = res.direction;
      this.sortKeyphrase = res.keyphrase;
    });
  }
}
