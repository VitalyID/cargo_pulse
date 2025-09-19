import { DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject, debounceTime, fromEvent, Subscription } from 'rxjs';
import { Breakpoint } from 'src/types/enums/breakpoint';

@Injectable({ providedIn: 'root' })
export class ViewPortService {
  breakpoints: Record<keyof typeof Breakpoint, boolean> = {
    TABLET: false,
  };

  private resizeSubscription: Subscription;
  readonly #destroyRef = inject(DestroyRef);

  isAdaptiveSize = new BehaviorSubject<Record<keyof typeof Breakpoint, boolean>>(
    this.updateBreakpoints(),
  );

  constructor() {
    this.resizeSubscription = fromEvent(window, 'resize')
      .pipe(debounceTime(300), takeUntilDestroyed(this.#destroyRef))
      .subscribe(() => {
        const updatedBreakpoints = this.updateBreakpoints();
        console.log(updatedBreakpoints);
        this.isAdaptiveSize.next(updatedBreakpoints);
      });
  }

  updateBreakpoints(): Record<keyof typeof Breakpoint, boolean> {
    const breakpointNames = Object.keys(Breakpoint).filter((key) =>
      isNaN(Number(key)),
    ) as (keyof typeof Breakpoint)[];

    breakpointNames.forEach((name) => {
      const value = Breakpoint[name];
      this.breakpoints[name] = matchMedia(`(max-width: ${value}px)`).matches;
    });
    return this.breakpoints;
  }
}
