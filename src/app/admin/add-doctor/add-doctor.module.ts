import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDoctorRoutingModule } from './add-doctor-routing.module';
import { DialogComponent } from './dialog/dialog.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  imports: [
    CommonModule,
    AddDoctorRoutingModule,
    MaterialModule,    
  ],
  declarations: [AddDoctorComponent, DialogComponent],
})
export class AddDoctorModule { }
