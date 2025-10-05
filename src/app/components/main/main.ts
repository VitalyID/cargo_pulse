import {
  Component,
  HostListener,
  inject,
} from '@angular/core';
import { ToggleMenuService } from 'src/app/services/toggleMenu/toggleMenu.service';
import { UserTripConfig } from 'src/types/interfaces/userTripConfig';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
  @HostListener('document:keyup', ['$event'])
  menuCloseToggler(event: KeyboardEvent) {
    this.menuClose(event);
  }

  readonly #menuService = inject(ToggleMenuService);

  menuClose(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.sideBarClose();
    }
  }

  sideBarClose() {
    this.#menuService.sideBarClose();
  }
}
