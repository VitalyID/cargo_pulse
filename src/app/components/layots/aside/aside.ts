import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ViewPortService } from 'src/app/services/viewport.service';
import {
  NAVIGATION_ICONS,
  NAVIGATION_LABELS,
  NavigationItems,
} from 'src/types/enums/listMenuItems';
import { NavigationConfig } from 'src/types/interfaces/navigationConf';

@Component({
  selector: 'app-aside',
  standalone: false,
  templateUrl: './aside.html',
  styleUrl: './aside.scss',
})
export class Aside {
  readonly #viewPort = inject(ViewPortService);
  viewPort = toSignal(this.#viewPort.isAdaptiveSize, { initialValue: { TABLET: false } });
  navigationItems: NavigationConfig[] = this.createNavigationItems();

  navigateToSection() {
    console.log('user navigation');
  }

  createNavigationItems(isOpenMenu: boolean = false) {
    return Object.values(NavigationItems).map((itemKey: NavigationItems) => ({
      icon: NAVIGATION_ICONS[itemKey],
      title: NAVIGATION_LABELS[itemKey],
      isOpenMenu,
    }));
  }

  closeMenu() {
    this.updateMenuState(false);
  }

  userOpenMenu() {
    this.updateMenuState(true);
  }

  updateMenuState(newState: boolean) {
    this.navigationItems = this.navigationItems.map((item) => ({
      ...item,
      isOpenMenu: newState,
    }));
  }
}
