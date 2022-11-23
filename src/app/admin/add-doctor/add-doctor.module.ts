import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDoctorRoutingModule } from './add-doctor-routing.module';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    AddDoctorRoutingModule
  ]
})
export class AddDoctorModule { }
