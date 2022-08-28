/* eslint-disable class-methods-use-this */
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Enums from 'src/app/shared/enums/enums.enum';
import HttpRequestItem from 'src/app/shared/interfaces/http-request-item.interface';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  @Input()
    item!: HttpRequestItem;

  getBorderColor(item: HttpRequestItem): {} {
    let color = '';
    const MILISECONDS_PER_DAY = 86400000;
    const currentDate = new Date().toISOString();
    const dateDifference = Date.parse(currentDate) - Date.parse(item?.snippet?.publishedAt || '1990-01-01');
    if (dateDifference / MILISECONDS_PER_DAY > 182) {
      color = Enums.RED;
    } else if (dateDifference / MILISECONDS_PER_DAY > 30) {
      color = Enums.YELLOW;
    } else if (dateDifference / MILISECONDS_PER_DAY > 7) {
      color = Enums.GREEN;
    } else {
      color = Enums.BLUE;
    }
    return color;
  }

  onNavigate() {
    this.router.navigate([this.item.id], { relativeTo: this.route });
  }
}
