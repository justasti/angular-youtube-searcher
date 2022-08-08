import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  title = 'youtube';

  showFilters: boolean = false;

  onToggleFilters() {
    this.showFilters = !this.showFilters;
  }
}
