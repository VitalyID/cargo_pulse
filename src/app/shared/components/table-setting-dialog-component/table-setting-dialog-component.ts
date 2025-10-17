import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  signal,
  Signal,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { LIST_SWITCHERS } from 'src/app/const';
import { selectUserConf } from 'src/app/states/userConfig/user-config.selectors';
import { KeyTable } from 'src/types/enums/keyMainTable';
import {
  TableConf,
  UserConfigUi,
} from 'src/types/interfaces/userConfigUi';
import * as UserConfigTableActions from '../../../states/userConfig/user-config.action';
import { CardComponent } from '../card/card-component';
import { SwitcherComponent } from '../switcher-component/switcher-component';
import { SwitcherConfig } from '../switcher-component/switcherConfig';

@Component({
  selector: 'app-table-setting-dialog-component',
  standalone: true,
  imports: [CardComponent, CommonModule, SwitcherComponent],
  templateUrl: './table-setting-dialog-component.html',
  styleUrl: './table-setting-dialog-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableSettingDialogComponent {
  userConf = input<UserConfigUi>();

  readonly #store = inject(Store);

  stateUserConf: Signal<UserConfigUi> =
    this.#store.selectSignal(selectUserConf);

  localUserConfTable = signal<TableConf>(
    this.stateUserConf().table
  );

  listSwitchers = computed(() => {
    const inputsValue = this.userConf()?.table;

    return LIST_SWITCHERS.map(switcher => {
      return {
        name: switcher,
        isActive: inputsValue
          ? (inputsValue[switcher] ?? false)
          : false,
      };
    });
  });

  columnSwitchers1 = computed(() =>
    this.listSwitchers().slice(0, 14)
  );
  columnSwitchers2 = computed(() =>
    this.listSwitchers().slice(14, 28)
  );
  columnSwitchers3 = computed(() =>
    this.listSwitchers().slice(
      28,
      this.listSwitchers().length
    )
  );

  convertName(name: string): string {
    const key = name as keyof typeof KeyTable;
    return KeyTable[key];
  }

  userTabCol(date: SwitcherConfig) {
    this.localUserConfTable.update(oldValue => {
      const tmp = { ...oldValue };
      return {
        ...tmp,
        [date.name]: date.isActive,
      };
    });

    const newConfig = this.localUserConfTable();
    this.#store.dispatch(
      UserConfigTableActions.updateTableConfigUser({
        newConfig,
      })
    );
  }
}
