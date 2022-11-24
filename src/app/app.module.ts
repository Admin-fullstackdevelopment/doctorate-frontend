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
import { AdminAuthGuard } from './admin/admin-auth.guard';

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
    PublicModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserAuthGuard, UserAuthService, AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
