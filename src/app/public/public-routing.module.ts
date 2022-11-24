import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UserLoginComponent } from './auth/user-login/user-login.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { UserRegisterComponent } from './auth/user-register/user-register.component';
import { ContactComponent } from './contact/contact.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { UserAuthGuard } from './userAuth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '', component: LayoutComponent, children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'login',
        component: UserLoginComponent,
      },
      {
        path: 'register',
        component: UserRegisterComponent,
      },
      {
        path: 'doctor',
        component: DoctorComponent,
        canActivate: [UserAuthGuard]
      },
      {
        path: 'profile',
        component: UserProfileComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      }

    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }

/* WHIT CHILD */
/* import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { childRoutes } from './public-child-routes';

const routes: Routes = [
  { 
    path: '', component: LayoutComponent,
    children: [
        {
          path: '',
          redirectTo: 'home', 
        },
        ...childRoutes
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
 */
