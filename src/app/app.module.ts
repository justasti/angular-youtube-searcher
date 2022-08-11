import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import FilterPipe from './video-items/pipes/filter.pipe';
import AppComponent from './app.component';
import HeaderComponent from './header/header.component';
import SearchBarComponent from './header/search-bar/search-bar.component';
import UserInfoComponent from './header/user-info/user-info.component';
import SortToolbarComponent from './sort-toolbar/sort-toolbar.component';
import VideoItemsComponent from './video-items/video-items.component';
import SearchItemComponent from './video-items/search-item/search-item.component';
import SortPipe from './video-items/pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    UserInfoComponent,
    SortToolbarComponent,
    VideoItemsComponent,
    SearchItemComponent,
    FilterPipe,
    SortPipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
