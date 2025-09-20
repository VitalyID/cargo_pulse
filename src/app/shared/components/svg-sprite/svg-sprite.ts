import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-svg-sprite',
  imports: [],
  templateUrl: './svg-sprite.html',
  styleUrl: './svg-sprite.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgSprite {
  @Input() icon: string = '';
}
