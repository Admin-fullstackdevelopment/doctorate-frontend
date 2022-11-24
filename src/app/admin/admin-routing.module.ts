import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from './admin-auth.guard';
import { AdminLoginComponent } from './admin-auth/admin-login/admin-login.component';
import { AdminProfileComponent } from './admin-auth/admin-profile/admin-profile.component';
import { childRoutes } from './admin-child-routes';
import { DachboardComponent } from './dachboard/dachboard/dachboard.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminLoginComponent,
  },
  {
    path: 'dachboard',
    component: AdminProfileComponent,
    canActivate: [AdminAuthGuard],
    children: [
      ...childRoutes
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }