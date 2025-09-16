import { Component, Input } from '@angular/core';
import { SvgSprite } from '../svg-sprite/svg-sprite';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [SvgSprite],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {
  @Input() title: string = '';
}
