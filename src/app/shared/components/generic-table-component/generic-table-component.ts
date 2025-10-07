import { LiveAnnouncer } from '@angular/cdk/a11y';
import { DatePipe } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  Injector,
  input,
  runInInjectionContext,
  ViewChild,
} from '@angular/core';
import {
  MatPaginator,
  MatPaginatorModule,
} from '@angular/material/paginator';
import {
  MatSort,
  MatSortModule,
  Sort,
} from '@angular/material/sort';
import {
  MatTableDataSource,
  MatTableModule,
} from '@angular/material/table';
import { WithUnitPipe } from 'src/app/pipes/unit.pipe';
import { TableColumnConfig } from 'src/types/interfaces/tableConfig';
import { UserTripConfig } from 'src/types/interfaces/userTripConfig';

@Component({
  selector: 'app-generic-table-component',
  standalone: true,
  imports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    WithUnitPipe,
    DatePipe,
  ],

  templateUrl: './generic-table-component.html',
  styleUrl: './generic-table-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenericTableComponent
  implements AfterViewInit
{
  userTrips = input.required<UserTripConfig[]>();
  columns = input.required<TableColumnConfig[]>();
  displayedColumns = input.required<string[]>();
  listPagination = input.required<number>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private readonly _liveAnnouncer = inject(LiveAnnouncer);
  readonly #injector = inject(Injector);

  readonly dataSource =
    new MatTableDataSource<UserTripConfig>();

  ngAfterViewInit(): void {
    runInInjectionContext(this.#injector, () => {
      effect(() => {
        this.dataSource.data = this.userTrips();
        this.dataSource.paginator = this.paginator;
      });
    });

    this.dataSource.sort = this.sort;

    this.dataSource.sortingDataAccessor = (
      item: UserTripConfig,
      property: string
    ) => {
      switch (property) {
        case 'date':
          return new Date(item.date).getTime();
        case 'actualWorkTime':
          return item.actualWorkTime || 0;
        default:
          return item[
            property as keyof UserTripConfig
          ] as any;
      }
    };
  }

  announceSortChange(sortState: Sort): void {
    if (sortState.direction) {
      this._liveAnnouncer.announce(
        `Sorted ${sortState.direction}ending`
      );
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  clickedRows(row: UserTripConfig) {
    console.log(row.id);
  }
}
