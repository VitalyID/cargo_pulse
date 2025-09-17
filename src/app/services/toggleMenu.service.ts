import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ToggleMenuService {
  sideBarState = new BehaviorSubject<boolean>(false);

  sideBarOpen() {
    this.sideBarState.next(true);
  }

  sideBarClose() {
    this.sideBarState.next(false);
  }
}
