import { Input, NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { GenericTableComponent } from 'src/app/shared/components/generic-table-component/generic-table-component';
import { Analytics } from './analytics';

@NgModule({
  imports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    GenericTableComponent,
  ],
  exports: [Analytics],
  declarations: [Analytics],
  providers: [],
})
export class AnalyticsModule {}
