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

  userTripData: Signal<UserTripConfig[]> =
    this.#store.selectSignal(selectUserTrips);

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

  stateCheckbox(data: SwitcherConfig) {
    console.log(data);
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
