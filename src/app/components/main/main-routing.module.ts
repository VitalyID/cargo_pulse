import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Main } from './main';

const routes: Routes = [
  {
    path: '',
    component: Main,
    children: [
      {
        path: '',
        redirectTo: 'analytics',
        pathMatch: 'full',
      },
      {
        path: 'analytics',
        loadChildren: () =>
          import('../analytics/analytics.module').then(
            m => m.AnalyticsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // ← forChild!
  exports: [RouterModule],
})
export class MainRoutingModule {}
