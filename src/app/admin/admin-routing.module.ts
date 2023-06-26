import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProfileComponent } from '../admin-auth/admin-profile/admin-profile.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout/admin-layout.component';
import { childRoutes } from './child-routes';


/* const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children:[
      {
        path: 'dachboard',
        component: DachboardComponent
      }, 
      {
        path: 'doctor',
        component: AddDoctorComponent
      }
    ]
  }
];
 */

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'profile',
        component: AdminProfileComponent
      },
      ...childRoutes
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }




/* 
const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
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
] */