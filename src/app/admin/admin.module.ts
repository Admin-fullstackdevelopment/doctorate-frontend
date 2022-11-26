//Modules:
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout/admin-layout.component';

@NgModule({ // hier müssen alle Modules von Admin importieren
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    /* AdminAuthModule, */
    /* DachboardModule, */
    /* AddDoctorModule, */
    /* AdminLayoutModule */
   ],
  declarations: [AdminLayoutComponent],
})
export class AdminModule { }