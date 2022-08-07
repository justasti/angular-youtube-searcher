import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppComponent from './app.component';
import HeaderComponent from './header/header.component';
import SearchBarComponent from './header/search-bar/search-bar.component';
import UserInfoComponent from './header/user-info/user-info.component';
import SortToolbarComponent from './sort-toolbar/sort-toolbar.component';
import SearchResultsComponent from './search-results/search-results.component';
import SearchItemComponent from './search-results/search-item/search-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    UserInfoComponent,
    SortToolbarComponent,
    SearchResultsComponent,
    SearchItemComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
