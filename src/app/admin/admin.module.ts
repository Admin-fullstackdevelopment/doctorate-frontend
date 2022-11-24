//Modules:
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material.module';

//Components:
import { DachboardModule } from './dachboard/dachboard.module';
import { AdminAuthModule } from './admin-auth/admin-auth.module';
import { AddDoctorModule } from './add-doctor/add-doctor.module';
import { AdminLayoutModule } from './admin-layout/admin-layout.module';

@NgModule({ // hier müssen alle Modules von Admin importieren
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminAuthModule,
    MaterialModule,
    DachboardModule,
    AddDoctorModule,
    AdminLayoutModule
  ],
  declarations: [],
})
export class AdminModule { }

    /* MaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule, */