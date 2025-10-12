import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  Signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { selectUserConf } from 'src/app/states/userConfig/user-config.selectors';
import { UserConfigUi } from 'src/types/interfaces/userConfigUi';
import * as UserConfActions from '../../../states/userConfig/user-config.action';
import { TableSettingDialogComponent } from '../table-setting-dialog-component/table-setting-dialog-component';
import { signal } from '@angular/core';

@Component({
  selector: 'app-dialog-component',
  imports: [CommonModule, MatButtonModule, MatDialogTitle],
  templateUrl: './dialog-component.html',
  styleUrl: './dialog-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent implements OnInit {
  readonly #store = inject(Store);
  readonly data = inject(MAT_DIALOG_DATA);

  userConf: Signal<UserConfigUi> =
    this.#store.selectSignal(selectUserConf);

  ngOnInit(): void {
    if (
      this.data.nameComponent ===
      TableSettingDialogComponent
    ) {
      this.#store.dispatch(
        UserConfActions.loadTableConfig()
      );
    }
  }

  closeDialog() {
    console.log('close dialog');
  }
}
