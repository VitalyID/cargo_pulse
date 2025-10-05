import { Routes } from '@angular/router';
import { Main } from './components/main/main';
import { Analytics } from './components/analytics/analytics';

export const routes: Routes = [
  {
    path: '',
    component: Main,
    pathMatch: 'full',
    children: [
      {
        path: '',
        component: Analytics,
        loadChildren: () =>
          import(
            './components/analytics/analytics.module'
          ).then(m => m.AnalyticsModule),
      },
    ],
  },
];
