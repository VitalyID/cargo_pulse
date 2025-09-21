import { Component, HostListener, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ToggleMenuService } from 'src/app/services/toggleMenu/toggleMenu.service';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
  @HostListener('document:keyup', ['$event']) menuCloseToggler(event: KeyboardEvent) {
    this.menuClose(event);
  }

  readonly #menuService = inject(ToggleMenuService);

  sideBarState$: Observable<boolean> = this.#menuService.sideBarState;

  menuClose(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.sideBarClose();
    }
  }
  menuOff() {
    this.sideBarClose();
  }

  sideBarClose() {
    this.#menuService.sideBarClose();
  }
}
