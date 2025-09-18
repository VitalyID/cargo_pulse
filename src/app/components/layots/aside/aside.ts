import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ViewPortService } from 'src/app/services/viewport.service';
import { NavConfig } from 'src/types/enums/listMenuItems';
import { NavigationConfig } from 'src/types/interfaces/navigationConf';

@Component({
  selector: 'app-aside',
  standalone: false,
  templateUrl: './aside.html',
  styleUrl: './aside.scss',
})
export class Aside {
  readonly #viewPort = inject(ViewPortService);
  viewPort = toSignal(this.#viewPort.isAdaptiveSize, { initialValue: { '992': false } });
  asideList: NavigationConfig[] = this.mapEnumToAsideList();

  userClickNavigation() {
    console.log('user navigation');
  }

  mapEnumToAsideList(isOpenMenu: boolean = false) {
    const listElementsNavigation = Object.entries(NavConfig);

    const listNavSections: NavigationConfig[] = listElementsNavigation.map((item) => {
      return { icon: item[1], title: item[0], isOpenMenu };
    });

    return listNavSections;
  }

  closeMenu() {
    this.asideList = this.mapEnumToAsideList(false);
  }

  userOpenMenu() {
    this.asideList = this.mapEnumToAsideList(true);
  }
}
