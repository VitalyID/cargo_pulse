import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { SwitcherConfig } from '../switcher-component/switcherConfig';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card-component.html',
  styleUrl: './card-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  swithers = input<SwitcherConfig[]>();
}
