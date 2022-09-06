import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AuthGuard from './auth/guards/auth.guard';
import LoginPageComponent from './auth/pages/login-page/login-page.component';
import PageNotFoundComponent from './core/pages/page-not-found-component/page-not-found.component';
import AdminPageComponent from './core/pages/admin-page/admin-page.component';
import SignUpPageComponent from './core/pages/sign-up-page/sign-up-page.component';

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
  { path: 'admin', component: AdminPageComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignUpPageComponent },
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
