import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ToggleMenuService } from '../../../services/toggleMenu/toggleMenu.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  readonly #menuService = inject(ToggleMenuService);

  toggleMenu() {
    this.#menuService.sideBarOpen();
  }
}
