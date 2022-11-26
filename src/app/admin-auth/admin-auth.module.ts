import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAuthRoutingModule } from './admin-auth-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

@NgModule({
  imports: [
    CommonModule,
    AdminAuthRoutingModule,
    MaterialModule,
    MatFormFieldModule
  ],
  declarations: [AdminLoginComponent, AdminProfileComponent],
})
export class AdminAuthModule { }
