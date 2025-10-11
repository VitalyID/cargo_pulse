import { ListStores } from './const';
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
import {
  userTripsReducer,
  TripState,
} from './states/userTrips/user-trips.reducer';
import { AppState } from './app.state';
import { UserConfigUiEffects } from './states/userConfig/user-config.effects';
import { UserConfUiReducer } from './states/userConfig/user-config.reducer';

@NgModule({
  imports: [
    RouterOutlet,
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    StoreModule.forRoot<AppState>(ListStores),
    EffectsModule.forRoot([
      UserTripsEffects,
      UserConfigUiEffects,
    ]),
  ],
  exports: [App],
  declarations: [App],
  providers: [provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
