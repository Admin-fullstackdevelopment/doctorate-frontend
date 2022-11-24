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
]