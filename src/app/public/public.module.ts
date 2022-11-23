import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './auth/user-login/user-login.component';
import { UserRegisterComponent } from './auth/user-register/user-register.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { MaterialModule } from '../material.module';
import { FooterComponent } from './footer/footer.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    MaterialModule
  ],
  declarations: [HomeComponent, UserLoginComponent, UserRegisterComponent, UserProfileComponent, FooterComponent, DoctorComponent, ContactComponent, AboutComponent, PagenotfoundComponent, LayoutComponent],
})
export class PublicModule { }
