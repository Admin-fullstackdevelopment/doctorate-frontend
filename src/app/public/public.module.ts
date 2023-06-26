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
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LayoutComponent } from './layout/layout.component';
import { ContactComponent } from './contact/contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [
    HomeComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserProfileComponent,
    FooterComponent,
    DoctorComponent,
    ContactComponent,
    AboutComponent,
    PagenotfoundComponent,
    LayoutComponent,
  ],
})
export class PublicModule { }
