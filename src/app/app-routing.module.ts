import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import LoginPageComponent from './auth/pages/login-page/login-page.component';
import PageNotFoundComponent from './core/pages/page-not-found-component/page-not-found.component';
import UserInfoComponent from './shared/components/header/user-info/user-info.component';
import VideoItemsComponent from './youtube/components/video-items/video-items.component';
import VideoDetailsComponent from './youtube/pages/video-details/video-details.component';

const appRoutes: Routes = [
  { path: '', component: UserInfoComponent },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'videos',
    component: VideoItemsComponent,
    children: [
      { path: ':id', component: VideoDetailsComponent },
    ],
  },
  {
    path: '404',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
