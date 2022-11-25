import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from '../public/auth/user-profile/user-profile.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout/admin-layout.component';
import { AddDoctorComponent } from './add-doctor/add-doctor/add-doctor.component';
import { AdminAuthGuard } from './admin-auth.guard';
import { AdminLoginComponent } from './admin-auth/admin-login/admin-login.component';
import { AdminProfileComponent } from './admin-auth/admin-profile/admin-profile.component';
import { childRoutes } from './admin-child-routes';
import { DachboardComponent } from './dachboard/dachboard/dachboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'layout',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AdminAuthGuard], children: [
      {
        path: 'add-doctor',
        component: AddDoctorComponent,
        canActivate: [AdminAuthGuard]
      },
      {
        path: 'dachboard',
        component: DachboardComponent,
        canActivate: [AdminAuthGuard]
      },
      {
        path: 'profile',
        component: AdminProfileComponent,
        canActivate: [AdminAuthGuard],
        children: [

          ...childRoutes
        ]
      }

    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }