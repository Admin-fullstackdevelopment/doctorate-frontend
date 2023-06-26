import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DachboardRoutingModule } from './dachboard-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { DachboardComponent } from './dachboard/dachboard.component';


@NgModule({
  imports: [
    CommonModule,
    DachboardRoutingModule,
    MaterialModule
  ],
  declarations: [DachboardComponent]
})
export class DachboardModule { }
