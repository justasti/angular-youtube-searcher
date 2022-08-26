import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import CoreService from 'src/app/core/services/core.service';
import items from 'src/app/items';
import { Sort } from 'src/app/shared/interfaces/sort.interface';
import SearchItem from '../../models/search-item.model';

@Component({
  selector: 'app-video-items',
  templateUrl: './video-items.component.html',
  styleUrls: ['./video-items.component.scss'],
})
export default class VideoItemsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private coreService: CoreService) {}

  searchPhrase: string = '';

  sortParam: string = '';

  sortDirection: string = '';

  sortKeyphrase: string = '';

  videos: SearchItem[] = items;

  sort: Sort = { sortParam: 'views', direction: 'desc', keyphrase: '' }

  // @Input()
  // set sort(newSort: Sort) {
  //   this.sortParam = newSort.sortParam;
  //   this.sortDirection = newSort.direction;
  //   this.sortKeyphrase = newSort.keyphrase;
  // }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.searchPhrase = String(params['q']);
    });
    this.coreService.onSort$.subscribe(res => {
      console.log(res);
    })
    // this.coreService.onSort(this.sort).subscribe((response: Sort) => { this.sort = response; });
  }
}
