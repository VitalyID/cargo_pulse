import { Component, inject, ViewChildren } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, Subscription } from 'rxjs';
import { ViewPortService } from 'src/app/services/viewport.service';
import { Breakpoints } from 'src/types/interfaces/breakpoints';

@Component({
  selector: 'app-aside',
  standalone: false,
  templateUrl: './aside.html',
  styleUrl: './aside.scss',
})
export class Aside {
  readonly #viewPort = inject(ViewPortService);
  viewPort = toSignal(this.#viewPort.isAdaptiveSize, { initialValue: { '992': false } });

  userClickNavigation() {
    console.log('user navigation');
  }
}
