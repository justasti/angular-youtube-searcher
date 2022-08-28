import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import YoutubeRoutingModule from './youtube-routing.module';
import VideoDetailsComponent from './pages/video-details/video-details.component';

@NgModule({
  declarations: [
    VideoDetailsComponent,
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    HttpClientModule,
  ],
  exports: [

  ],
})
export default class YoutubeModule { }
