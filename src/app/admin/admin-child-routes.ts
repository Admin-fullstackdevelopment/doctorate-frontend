//MODULE IMPORTIEREN:

export const childRoutes = [
    {
      path: 'dachboard',
      loadChildren: () =>
        import('./dachboard/dachboard.module').then(m => m.DachboardModule),
       data: { icon: 'dashboard', text: 'Dashboard' } 
    }, 
]