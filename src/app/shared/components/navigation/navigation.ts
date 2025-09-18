import { Component, inject, Input } from '@angular/core';
import { SvgSprite } from '../svg-sprite/svg-sprite';
import { Observable } from 'rxjs';
import { ToggleMenuService } from 'src/app/services/toggleMenu.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [SvgSprite, CommonModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {
  @Input() title: string = '';

  readonly #menuService = inject(ToggleMenuService);

  sideBarState$: Observable<boolean> = this.#menuService.sideBarState;
}
