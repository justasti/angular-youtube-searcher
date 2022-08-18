import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import FilterPipe from './youtube/pipes/filter.pipe';
import AppComponent from './app.component';
import SearchBarComponent from './shared/components/header/search-bar/search-bar.component';
import UserInfoComponent from './shared/components/header/user-info/user-info.component';
import SortToolbarComponent from './shared/components/sort-toolbar/sort-toolbar.component';
import SearchItemComponent from './youtube/components/video-items/search-item/search-item.component';
import SortPipe from './youtube/pipes/sort.pipe';
import VideoItemsComponent from './youtube/components/video-items/video-items.component';
import HeaderComponent from './shared/components/header/header.component';
import AuthModule from './auth/auth.module';
import AppRoutingModule from './app-routing.module';

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
  imports: [BrowserModule, FormsModule, AuthModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
