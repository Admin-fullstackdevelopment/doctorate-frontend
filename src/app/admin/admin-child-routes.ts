//MODULE IMPORTIEREN:

export const childRoutes = [
    {
      path: 'dachboard',
      loadChildren: () =>
        import('./dachboard/dachboard.module').then(m => m.DachboardModule),
    },  
    {
      path: 'login',
      loadChildren: () =>
        import('./admin-auth/admin-auth.module').then(m => m.AdminAuthModule),
    },
    {
      path: 'profile',
      loadChildren: () =>
        import('./admin-auth/admin-auth.module').then(m => m.AdminAuthModule),
    },
    {
      path: 'doctor',
      loadChildren: () =>
        import('./add-doctor/add-doctor.module').then(m => m.AddDoctorModule),
    },
    {
      path: 'layout',
      loadChildren: () =>
        import('./admin-layout/admin-layout.module').then(m => m.AdminLayoutModule),
    },  
    {
      path: 'dialog',
      loadChildren: () =>
        import('./add-doctor//add-doctor.module').then(m => m.AddDoctorModule),
    },  
]