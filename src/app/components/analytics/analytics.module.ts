import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { GenericTableComponent } from 'src/app/shared/components/generic-table-component/generic-table-component';
import { Analytics } from './analytics';
import { CustomPaginatorLocale } from 'src/app/shared/services/custom-paginator-intl.service';

@NgModule({
  imports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    GenericTableComponent,
    MatButtonModule,
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
