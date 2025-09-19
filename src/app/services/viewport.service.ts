import { DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject, debounceTime, fromEvent, Subscription } from 'rxjs';
import { typeDevice } from 'src/types/enums/listDevices';
import { Breakpoints } from './../../types/interfaces/breakpoints';

@Injectable({ providedIn: 'root' })
export class ViewPortService {
  breakpoints: Breakpoints = {
    '992': false,
  };

  private resizeSubscription: Subscription;
  readonly #destroyRef = inject(DestroyRef);

  isAdaptiveSize = new BehaviorSubject<Breakpoints>(this.updateBreakpoints());

  constructor() {
    this.resizeSubscription = fromEvent(window, 'resize')
      .pipe(debounceTime(300), takeUntilDestroyed(this.#destroyRef))
      .subscribe(() => {
        this.isAdaptiveSize.next(this.updateBreakpoints());
      });
  }

  updateBreakpoints() {
    const screenSize = Object.keys(this.breakpoints);

    screenSize.forEach((brPoint) => {
      this.breakpoints = {
        ...this.breakpoints,
        [brPoint]: matchMedia(`(max-width: ${brPoint}px)`).matches,
      };
    });

    return this.breakpoints;
  }
}
