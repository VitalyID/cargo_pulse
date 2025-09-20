import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnDestroy, Output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { MENU_ANIMATION_DELAY } from 'src/app/const';
import { ToggleMenuService } from 'src/app/services/toggleMenu.service';
import { ViewPortService } from 'src/app/services/viewport.service';
import { SvgSprite } from '../svg-sprite/svg-sprite';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [SvgSprite, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class Navigation implements OnDestroy {
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() closeIcon: boolean = false;
  @Input() isOpenMenu: boolean = false;
  @Output() closeMenu = new EventEmitter<boolean>();
  @Output() userOpenMenu = new EventEmitter<boolean>(false);

  readonly #menuService = inject(ToggleMenuService);
  readonly #viewPort = inject(ViewPortService);

  viewPort = toSignal(this.#viewPort.isAdaptiveSize, { initialValue: { TABLET: false } });

  sideBarState$: Observable<boolean> = this.#menuService.sideBarState;
  timeoutID: any;

  iconClick() {
    // NOTE: When viewPort <= 992px: click on icon is opening title in aside and after 1s attaching new method navigateToSection(). When viewPort > 992px: click on navigation component is start navigateToSection

    if (this.viewPort()?.TABLET && !this.isOpenMenu) {
      this.openAsideSection();
    }
    if (this.isOpenMenu) {
      this.navigateToSection();
    }
  }

  menuOff() {
    this.#menuService.sideBarClose();
    this.closeMenu.emit(true);
  }

  openAsideSection() {
    this.#menuService.sideBarOpen();

    // attach navigateToSection() to .navigation__icon after 1s
    this.timeoutID = setTimeout(() => {
      this.userOpenMenu.emit(true);
    }, MENU_ANIMATION_DELAY);
  }

  navigateToSection() {
    console.log('user navigation');
  }

  ngOnDestroy(): void {
    if (this.timeoutID) {
      clearTimeout(this.timeoutID);
    }
  }
}
