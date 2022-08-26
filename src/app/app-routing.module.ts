import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import LoginPageComponent from './auth/pages/login-page/login-page.component';
import PageNotFoundComponent from './core/pages/page-not-found-component/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'videos',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.default),
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
