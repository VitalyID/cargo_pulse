import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { App } from './app';
import { AppRoutingModule, routes } from './app.routes';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomPaginatorLocale } from './shared/services/custom-paginator-intl.service';

@NgModule({
  imports: [
    RouterOutlet,
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
  ],
  exports: [App],
  declarations: [App],
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: CustomPaginatorLocale,
    },
  ],
  bootstrap: [App],
})
export class AppModule {}
