import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import AppComponent from './app.component';
import HeaderComponent from './shared/components/header/header.component';
import AppRoutingModule from './app-routing.module';
import AuthModule from './auth/auth.module';
import SearchBarComponent from './shared/components/header/search-bar/search-bar.component';
import UserInfoComponent from './shared/components/header/user-info/user-info.component';
import SortToolbarComponent from './shared/components/sort-toolbar/sort-toolbar.component';
import VideoItemsComponent from './youtube/pages/video-items/video-items.component';
import SearchItemComponent from './youtube/components/search-item/search-item.component';
import FilterPipe from './youtube/pipes/filter.pipe';
import SortPipe from './youtube/pipes/sort.pipe';
import YoutubeInterceptor from './youtube/services/youtube-interceptor.service';

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
  imports: [
    BrowserModule,
    FormsModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: YoutubeInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export default class AppModule {}
