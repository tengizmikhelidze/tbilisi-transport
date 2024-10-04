import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'app'
      },
      {
        path: 'app',
        loadChildren: () => import('./features/features.routes').then(m => m.FeatureRoutes)
      }
    ]
  }
];
