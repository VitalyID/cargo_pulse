import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  Injector,
  OnInit,
  runInInjectionContext,
  Signal,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { LIST_MAIN_TABLE } from 'src/app/const';
import { SwitcherConfig } from 'src/app/shared/components/switcher-component/switcherConfig';
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

import { DialogComponent } from 'src/app/shared/components/dialog-component/dialog-component';

@Component({
  selector: 'app-analytics',
  standalone: false,
  templateUrl: './analytics.html',
  styleUrl: './analytics.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Analytics implements OnInit {
  readonly #store = inject(Store);
  readonly #injector = inject(Injector);
  readonly dialog = inject(MatDialog);

  userTripData: Signal<UserTripConfig[]> =
    this.#store.selectSignal(selectUserTrips);

  // userTripData: UserTripConfig[] = [
  //   {
  //     id: '926c24f6-84db-445f-9747-c1de9db739f8',
  //     date: '2024-01-01',
  //     mileage: 251,
  //     driver: 'Иванов А.С.',
  //     licensePlate: 'Р987СТ750',
  //     actualWorkTime: 9,
  //     fuelConsumption: 29.0,
  //     fuelCost: 1492.71,
  //     primeCost: 2239.71,
  //     officeCost: 636,
  //     otherCost: 111,
  //     revenue: 6147,
  //     margin: 3907.29,
  //     marginality: 63.56,
  //     taxCost: 171.3,
  //     counterparty: {
  //       type: 'Organization',
  //       title: "ООО 'Сервис83'",
  //       officialAddress: {
  //         region: 'Свердловская область',
  //         city: 'Москва',
  //         street: 'Садовоя',
  //         house: 18,
  //         country: 'Россия',
  //       },
  //       postAddress: {
  //         region: 'Ленинградская область',
  //         city: 'Москва',
  //         street: 'Пушкина',
  //         house: 13,
  //         country: 'Россия',
  //         office: 18,
  //       },
  //       taxID: '2810660774',
  //       kpp: '381460923',
  //       currentAcc: '34117796911566542697',
  //       bank: 'Сбербанк',
  //       correspondentAcc: '97667072175429034753',
  //       bik: '466774117',
  //       ogrn: '6899304879761',
  //       director: 'Иванов Дмитрий Дмитриевич',
  //       directorInShort: 'П.А.',
  //     },
  //   },
  // ];

  // driver: SwitcherConfig = {
  //   name: 'driver',
  //   isActive: false,
  // };
  // stateNumber: SwitcherConfig = {
  //   name: 'stateNumber',
  //   isActive: false,
  // };
  // counterparty: SwitcherConfig = {
  //   name: 'counterparty',
  //   isActive: true,
  // };
  // fuelConsumption: SwitcherConfig = {
  //   name: 'fuelConsumption',
  //   isActive: true,
  // };
  // actualWorkTime: SwitcherConfig = {
  //   name: '',
  //   isActive: false,
  // };

  columns: TableColumnConfig[] = [
    this.generatorColumnConf('date', 'dd.MM.yyyy'),
    this.generatorColumnConf('mileage', 'км'),
    this.generatorColumnConf('actualWorkTime', 'ч'),
    this.generatorColumnConf('fuelConsumption', 'л'),
    this.generatorColumnConf('fuelCost', '₽'),
    this.generatorColumnConf('primeCost', '₽'),
    this.generatorColumnConf('taxCost', '₽'),
    this.generatorColumnConf('officeCost', '₽'),
    this.generatorColumnConf('otherCost', '₽'),
    this.generatorColumnConf('revenue', '₽'),
    this.generatorColumnConf('margin', '₽'),
    this.generatorColumnConf('marginality', '%'),
    this.generatorColumnConf('driver'),
    this.generatorColumnConf('licensePlate'),
    this.generatorColumnConf('counterparty'),
  ];

  // driver: SwitcherConfig = {
  //   name: 'driver',
  //   isActive: true,
  // };

  // stateNumber: SwitcherConfig = {
  //   name: 'stateNumber',
  //   isActive: false,
  // };

  // counterparty: SwitcherConfig = {
  //   name: 'counterparty',
  //   isActive: true,
  // };

  // fuelConsumption: SwitcherConfig = {
  //   name: 'fuelConsumption',
  //   isActive: true,
  // };

  // actualWorkTime: SwitcherConfig = {
  //   name: 'actualWorkTime',
  //   isActive: false,
  // };

  displayedColumns: string[] = [];

  LIST_MAIN_TABLE: number = LIST_MAIN_TABLE;

  data: Signal<UserConfigUi> =
    this.#store.selectSignal(selectUserConf);

  ngOnInit(): void {
    this.#store.dispatch(UserTripsActions.loadUserTrips());
    this.#store.dispatch(UserConfActions.loadTableConfig());

    runInInjectionContext(this.#injector, () => {
      effect(() => {
        if (!this.data().table) return;
        this.usersConfig();
        this.displayedColumns = this.usersConfig();
      });
    });
  }

  generatorColumnConf(
    key: string,
    pipeArg?: string
  ): TableColumnConfig {
    return {
      key,
      title: KeyTable[key as keyof typeof KeyTable],
      cell: (element: UserTripConfig) => {
        const value = element[key as keyof UserTripConfig];
        return value?.toString() ?? '';
      },
      pipe: key === 'date' ? 'date' : 'withUnit',
      pipeArg,
    };
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: 'Настройка таблицы',
        nameComponent: TableSettingDialogComponent,
      },
    });
  }

  usersConfig(): string[] {
    const arrConfigs: [string, boolean][] = Object.entries(
      this.data().table
    );

    // return only keys, when value === true
    return arrConfigs
      .filter(conf => conf[1])
      .map(conf => {
        return conf[0];
      });
  }
}
