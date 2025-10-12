import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { LIST_SWITCHERS } from 'src/app/const';
import { UserConfigUi } from 'src/types/interfaces/userConfigUi';
import { CardComponent } from '../card/card-component';
import { SwitcherComponent } from '../switcher-component/switcher-component';
import { KeyTable } from 'src/types/enums/keyMainTable';

@Component({
  selector: 'app-table-setting-dialog-component',
  standalone: true,
  imports: [CardComponent, CommonModule, SwitcherComponent],
  templateUrl: './table-setting-dialog-component.html',
  styleUrl: './table-setting-dialog-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableSettingDialogComponent {
  inputs = input<UserConfigUi>();

  listSwitchers = computed(() => {
    const inputsValue = this.inputs();

    return LIST_SWITCHERS.map(switcher => {
      return {
        name: switcher,
        isActive: inputsValue
          ? (inputsValue.table[switcher] ?? false)
          : false,
      };
    });
  });

  columnSwitchers1 = this.listSwitchers().slice(0, 5);
  columnSwitchers2 = this.listSwitchers().slice(5, 10);
  columnSwitchers3 = this.listSwitchers().slice(
    10,
    this.listSwitchers().length
  );

  convertName(name: string): string {
    const key = name as keyof typeof KeyTable;
    return KeyTable[key];
  }
}
