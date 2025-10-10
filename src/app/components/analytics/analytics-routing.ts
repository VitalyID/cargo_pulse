import { RouterModule, Routes } from '@angular/router';
import { Analytics } from './analytics';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideEffects } from '@ngrx/effects';
import { UserTripsEffects } from 'src/app/states/userTrips/user-trip.effects';

export const routes: Routes = [
  {
    path: '',
    component: Analytics,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalyticsRoutingModule {}
