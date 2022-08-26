import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import items from 'src/app/items';
import { Sort } from 'src/app/shared/interfaces/sort.interface';
import SearchItem from '../../models/search-item.model';

@Component({
  selector: 'app-video-items',
  templateUrl: './video-items.component.html',
  styleUrls: ['./video-items.component.scss'],
})
export default class VideoItemsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  searchPhrase: string = '';

  sortParam: string = '';

  sortDirection: string = '';

  sortKeyphrase: string = '';

  @Input()
  set sort(newSort: Sort) {
    this.sortParam = newSort.sortParam;
    this.sortDirection = newSort.direction;
    this.sortKeyphrase = newSort.keyphrase;
  }

  videos: SearchItem[] = items;

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.searchPhrase = String(params['q']);
    });
  }
}
