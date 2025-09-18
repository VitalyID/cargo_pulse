import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { ToggleMenuService } from 'src/app/services/toggleMenu.service';
import { ViewPortService } from 'src/app/services/viewport.service';
import { SvgSprite } from '../svg-sprite/svg-sprite';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [SvgSprite, CommonModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() closeIcon: boolean = false;

  readonly #menuService = inject(ToggleMenuService);
  readonly #viewPort = inject(ViewPortService);

  isOpenMenu: boolean = false;

  viewPort = toSignal(this.#viewPort.isAdaptiveSize, { initialValue: { '992': false } });

  sideBarState$: Observable<boolean> = this.#menuService.sideBarState;

  menuOff() {
    console.log('close menu');
  }

  openAsideSection() {
    console.log('click on icon');
    this.#menuService.sideBarOpen();

    // attach userClickNavigation() to .navigation__icon after 1s
    setTimeout(() => {
      this.isOpenMenu = true;
    }, 1000);
  }

  userClickNavigation() {
    console.log('user navigation');
  }
}
