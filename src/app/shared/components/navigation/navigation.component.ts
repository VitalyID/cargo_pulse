import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  Router,
  RouterLinkActive,
  RouterModule,
} from '@angular/router';
import { Observable } from 'rxjs';
import { MENU_ANIMATION_DELAY } from 'src/app/const';
import { ToggleMenuService } from 'src/app/services/toggleMenu/toggleMenu.service';
import { ViewPortService } from 'src/app/services/viewport/viewport.service';
import { SvgSprite } from '../svg-sprite/svg-sprite';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    SvgSprite,
    CommonModule,
    RouterLinkActive,
    RouterModule,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class Navigation implements OnDestroy {
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() closeIcon: boolean = false;
  @Input() isOpenMenu: boolean = false;
  @Input() routerLink: string = '';
  @Output() closeMenu = new EventEmitter<boolean>();
  @Output() userOpenMenu = new EventEmitter<boolean>(false);

  readonly #menuService = inject(ToggleMenuService);
  readonly #viewPort = inject(ViewPortService);
  readonly #router = inject(Router);

  viewPort = toSignal(this.#viewPort.isAdaptiveSize, {
    initialValue: {
      XXLARGE: false,
      XLARGE: false,
      LARGE: false,
      MEDIUM: false,
      SMALL: false,
    },
  });

  sideBarState$: Observable<boolean> =
    this.#menuService.sideBarState;
  timeoutID: any;

  iconClick(path: string) {
    // NOTE: When viewPort <= 992px: click on icon is opening title in aside and after 1s attaching new method navigateToSection(). When viewPort > 992px: click on navigation component is start navigateToSection

    if (this.viewPort()?.LARGE && !this.isOpenMenu) {
      this.openAsideSection();
    }
    if (this.isOpenMenu) {
      this.navigateToSection(path);
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

  navigateToSection(path: string) {
    console.log('user navigation');
    this.#router.navigate([`/${path}`]);
  }

  ngOnDestroy(): void {
    if (this.timeoutID) {
      this.clearTimeoutFn(this.timeoutID);
    }
  }

  clearTimeoutFn: (timeoutId: number) => void =
    clearTimeout;
}
