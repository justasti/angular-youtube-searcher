import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import YoutubeRoutingModule from './youtube-routing.module';
import VideoDetailsComponent from './pages/video-details/video-details.component';
import AdminPageComponent from '../core/pages/admin-page/admin-page.component';
import SignUpPageComponent from '../core/pages/sign-up-page/sign-up-page.component';

@NgModule({
  declarations: [
    VideoDetailsComponent,
    AdminPageComponent,
    SignUpPageComponent,
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [

  ],
  providers: [],
})
export default class YoutubeModule { }
