/* eslint-disable class-methods-use-this */
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  showFilters: boolean = false;

  onToggleFilters() {
    this.showFilters = !this.showFilters;
  }
}
