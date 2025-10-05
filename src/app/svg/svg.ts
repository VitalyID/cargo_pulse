import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-svg',
  imports: [],
  templateUrl: './svg.html',
  styleUrl: './svg.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Svg {}
