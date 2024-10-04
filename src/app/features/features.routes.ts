import { Routes } from '@angular/router';

export const FeatureRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.routes').then(m => m.HomeRoutes)
      }
    ]
  }
];
