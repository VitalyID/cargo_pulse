import { Type } from '@angular/core';
import { SwitcherConfig } from 'src/app/shared/components/switcher-component/switcherConfig';

export interface DialogConfig {
  nameComponent: Type<any>;
  title: string;
  props: SettingAnalytics;
}

export interface SettingAnalytics {
  checkboxes: SwitcherConfig[];
}
