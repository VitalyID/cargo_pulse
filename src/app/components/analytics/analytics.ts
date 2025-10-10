import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  Signal,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { LIST_MAIN_TABLE } from 'src/app/const';
import { SwitcherConfig } from 'src/app/shared/components/switcher-component/switcherConfig';
import { selectUserTrips } from 'src/app/states/userTrips/user-tips.selectors';
import { KeyTable } from 'src/types/enums/keyMainTable';
import { TableColumnConfig } from './../../../types/interfaces/tableConfig';
import { UserTripConfig } from './../../../types/interfaces/userTripConfig';
import * as UserTripsActions from '../../states/userTrips/user-trips.action';

@Component({
  selector: 'app-analytics',
  standalone: false,
  templateUrl: './analytics.html',
  styleUrl: './analytics.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Analytics implements OnInit {
  readonly #store = inject(Store);

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

  driver: SwitcherConfig = {
    name: 'driver',
    isActive: true,
  };

  stateNumber: SwitcherConfig = {
    name: 'stateNumber',
    isActive: false,
  };

  counterparty: SwitcherConfig = {
    name: 'counterparty',
    isActive: true,
  };

  fuelConsumption: SwitcherConfig = {
    name: 'fuelConsumption',
    isActive: true,
  };

  actualWorkTime: SwitcherConfig = {
    name: 'actualWorkTime',
    isActive: false,
  };

  displayedColumns = Object.keys(KeyTable);
  LIST_MAIN_TABLE: number = LIST_MAIN_TABLE;

  ngOnInit(): void {
    this.#store.dispatch(UserTripsActions.loadUserTrips());
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
}
