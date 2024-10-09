import {Route, Routes} from '@angular/router';

const MinRoute: Route = {
  children: [
    {
      path: '',
      loadChildren: () => import('./features/features.routes').then(m => m.FeatureRoutes)
    },
  ]
}

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'ka',
  },
  {
    path: 'ka',
    ...MinRoute
  },
  {
    path: 'en',
    ...MinRoute
  }
];
