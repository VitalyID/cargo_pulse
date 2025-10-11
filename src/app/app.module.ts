import { provideHttpClient } from '@angular/common/http';
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
import { AppState } from './app.state';
import { ListStores } from './const';
import { UserConfigUiEffects } from './states/userConfig/user-config.effects';
import { UserTripsEffects } from './states/userTrips/user-trip.effects';

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
