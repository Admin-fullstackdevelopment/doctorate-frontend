import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { childRoutes } from './admin-child-routes'; 

import { DachboardComponent } from './dachboard/dachboard/dachboard.component';

const routes: Routes = [
   {
    path: '',
    component: DachboardComponent,
    children: [
      /* {
        path: '',
        redirectTo: 'dashboard'
      }, */
      ...childRoutes
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }