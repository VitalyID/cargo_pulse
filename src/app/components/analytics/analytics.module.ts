import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { GenericTableComponent } from 'src/app/shared/components/generic-table-component/generic-table-component';
import { CustomPaginatorLocale } from 'src/app/shared/services/custom-paginator-intl.service';
import { Analytics } from './analytics';
import { AnalyticsRoutingModule } from './analytics-routing';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog-component/dialog-component';

@NgModule({
  imports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    GenericTableComponent,
    MatButtonModule,
    CommonModule,
    AnalyticsRoutingModule,
    MatDialogModule,
    DialogComponent,
  ],
  exports: [Analytics],
  declarations: [Analytics],
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: CustomPaginatorLocale,
    },
  ],
})
export class AnalyticsModule {}
