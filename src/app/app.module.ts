import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { UserAuthService } from './public/auth/authService/userAuth.service';
import { PublicModule } from './public/public.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserAuthGuard } from './public/userAuth.guard';
import { DoctorService } from './admin/add-doctor/doctorService/doctor.service';
import { AdminAuthGuard } from './core/admin-auth.guard';
import { AdminAuthModule } from './admin-auth/admin-auth.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
    PublicModule,
    AdminAuthModule,
    AdminModule
  ],
  providers: [UserAuthGuard, UserAuthService, AdminAuthGuard, DoctorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
