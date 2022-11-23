//Modules:
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material.module';

//Components:
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { DachboardModule } from './dachboard/dachboard.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';

@NgModule({
  declarations: [
  
    AdminLoginComponent,
       AdminLayoutComponent,
       AddDoctorComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MaterialModule,
    DachboardModule
  ]
})
export class AdminModule { }
