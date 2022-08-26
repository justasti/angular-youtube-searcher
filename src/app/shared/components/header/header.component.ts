/* eslint-disable class-methods-use-this */
import {
  Component,
  EventEmitter,
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

  onToggleFilters(event: boolean) {
    this.showFilters = event;
    this.toggleFilters.emit(this.showFilters);
  }
}
