import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { childRoutes } from './public-child-routes';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  ...childRoutes

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
