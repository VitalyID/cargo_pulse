import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  Signal,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { LIST_MAIN_TABLE } from 'src/app/const';
import { selectUserConf } from 'src/app/states/userConfig/user-config.selectors';
import { selectUserTrips } from 'src/app/states/userTrips/user-tips.selectors';
import { KeyTable } from 'src/types/enums/keyMainTable';
import { UserConfigUi } from 'src/types/interfaces/userConfigUi';
import * as UserConfActions from '../../states/userConfig/user-config.action';
import * as UserTripsActions from '../../states/userTrips/user-trips.action';
import { TableColumnConfig } from './../../../types/interfaces/tableConfig';
import { UserTripConfig } from './../../../types/interfaces/userTripConfig';

import { MatDialog } from '@angular/material/dialog';
import { TableSettingDialogComponent } from 'src/app/shared/components/table-setting-dialog-component/table-setting-dialog-component';

import { DialogRef } from '@angular/cdk/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog-component/dialog-component';
import { TablePipes } from 'src/types/enums/tableSellPipe';
import { TypeClients } from 'src/types/enums/typeCliets';

@Component({
  selector: 'app-analytics',
  standalone: false,
  templateUrl: './analytics.html',
  styleUrl: './analytics.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Analytics implements OnInit {
  readonly #store = inject(Store);
  readonly dialog = inject(MatDialog);

  userTripData: Signal<UserTripConfig[]> =
    this.#store.selectSignal(selectUserTrips);
  data: Signal<UserConfigUi> =
    this.#store.selectSignal(selectUserConf);

  displayedColumns = computed(() => {
    if (!this.data().table) return [];
    console.log(1, this.data().table);
    console.log(2, this.data());

    const arrConfigs: [string, boolean][] = Object.entries(
      this.data().table
    );

    // return only keys, when value === true
    return arrConfigs
      .filter(conf => conf[1])
      .map(conf => {
        return conf[0];
      });
  });

  // NOTE: setup column in the table set auto from get back's config
  columns: Signal<TableColumnConfig[]> = computed(() => {
    return this.displayedColumns().map(name =>
      this.generatorColumnConf(name)
    );
  });

  dialogRef?: DialogRef;

  LIST_MAIN_TABLE: number = LIST_MAIN_TABLE;

  ngOnInit(): void {
    this.#store.dispatch(UserTripsActions.loadUserTrips());
    this.#store.dispatch(UserConfActions.loadTableConfig());
  }

  generatorColumnConf(key: string): TableColumnConfig {
    const pipeArg =
      TablePipes[key as keyof typeof TablePipes];

    // NOTE: translate partners in column counterpart_type
    let cell:
      | ((element: UserTripConfig) => string)
      | undefined = undefined;
    if (key === 'counterpart_type') {
      cell = (element: UserTripConfig) => {
        const type = element[key];
        return type
          ? TypeClients[type as keyof typeof TypeClients]
          : '';
      };
    }

    return {
      key,
      title: KeyTable[key as keyof typeof KeyTable],
      cell:
        cell ||
        ((element: UserTripConfig) => {
          const value =
            element[key as keyof UserTripConfig];
          return value?.toString() ?? '';
        }),
      pipe: key === 'date' ? 'date' : 'withUnit',
      pipeArg,
    };
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: 'Настройка таблицы',
        nameComponent: TableSettingDialogComponent,
      },
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
