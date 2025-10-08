import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { SettingAnalytics } from 'src/types/interfaces/dialogConfig';
import { SwitcherComponent } from '../switcher-component/switcher-component';
import { SwitcherConfig } from '../switcher-component/switcherConfig';
import { inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-table-setting-dialog-component',
  standalone: true,
  imports: [SwitcherComponent],
  templateUrl: './table-setting-dialog-component.html',
  styleUrl: './table-setting-dialog-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableSettingDialogComponent {
  @Input() driver: SwitcherConfig = {
    name: '',
    isActive: false,
  };
  @Input() stateNumber: SwitcherConfig = {
    name: '',
    isActive: false,
  };
  @Input() counterparty: SwitcherConfig = {
    name: '',
    isActive: false,
  };
  @Input() fuelConsumption: SwitcherConfig = {
    name: '',
    isActive: false,
  };
  @Input() actualWorkTime: SwitcherConfig = {
    name: '',
    isActive: false,
  };
  @Output() modalConfig =
    new EventEmitter<SettingAnalytics>();

  switchers: SwitcherConfig[] = [
    this.driver,
    this.stateNumber,
    this.counterparty,
    this.fuelConsumption,
    this.actualWorkTime,
  ];

  updateSwitcher(data: SwitcherConfig): SwitcherConfig[] {
    return this.switchers.map(switcher => {
      if (switcher.name === data.name) {
        return { ...switcher, isActive: data.isActive };
      }
      return switcher;
    });
  }

  stateCheckbox(data: SwitcherConfig) {
    this.updateSwitcher(data);
    this.modalConfig.emit({ checkboxes: this.switchers });
  }
}
