import { Input, NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { GenericTableComponent } from 'src/app/shared/components/generic-table-component/generic-table-component';
import { Analytics } from './analytics';
import { MatButtonModule } from '@angular/material/button';

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
  providers: [],
})
export class AnalyticsModule {}
