import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from './core/admin-auth.guard';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
      canActivate: [AdminAuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./admin-auth/admin-auth.module').then((m) => m.AdminAuthModule)
  },
  {
    path: '',
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule),
  },
/*   {
    path: '**',
    component: PageNotFoundComponent,
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }