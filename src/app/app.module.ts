import {
  HttpClient,
  provideHttpClient,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { App } from './app';
import { AppRoutingModule, routes } from './app.routes';
import { UserTripsEffects } from './states/userTrips/user-trip.effects';
import { userTripsReducer } from './states/userTrips/user-trips.reducer';

@NgModule({
  imports: [
    RouterOutlet,
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    StoreModule.forRoot({ userTripsKey: userTripsReducer }),
    EffectsModule.forRoot([UserTripsEffects]),
  ],
  exports: [App],
  declarations: [App],
  providers: [provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
