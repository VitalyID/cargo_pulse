import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { ToggleMenuService } from './toggleMenu.service';

describe('ToggleService', () => {
  let service: ToggleMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleMenuService);
  });

  it('should ToggleMenuService is created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initial sidebar of false', async () => {
    const firstState = await firstValueFrom(service.sideBarState);
    expect(firstState).toBe(false);
  });

  it('should set true when sideBarOpen', (done) => {
    const values: boolean[] = [false];
    service.sideBarOpen();

    service.sideBarState.subscribe((value) => {
      if (value) {
        values.push(value);
        expect(values).toEqual([false, true]);
      }
    });

    done();
  });

  it('should set false when sideBarClose', (done) => {
    const values: boolean[] = [true];
    service.sideBarClose();

    service.sideBarState.subscribe((value) => {
      if (!value) {
        values.push(value);
        expect(values).toEqual([true, false]);
      }
    });

    done();
  });
});
