import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement, inject } from '@angular/core';
import { ToggleMenuService } from 'src/app/services/toggleMenu/toggleMenu.service';
import { AsideModule } from '../layots/aside/aside.module';
import { HeaderModule } from '../layots/header/header.module';
import { Main } from './main';
import { MainModule } from './main.module';

describe('Main', () => {
  let component: Main;
  let fixture: ComponentFixture<Main>;
  let service: ToggleMenuService;
  let compiled: HTMLElement;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainModule, HeaderModule, AsideModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Main);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
    debugElement = fixture.debugElement;
    service = TestBed.inject(ToggleMenuService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should listen ESC-key', () => {
    const spyService = spyOn(component, 'menuClose');
    const keyboard = new KeyboardEvent('keyup', { key: 'Escape' });
    const document = debugElement.nativeElement.ownerDocument;
    document.dispatchEvent(keyboard);
    expect(spyService).toHaveBeenCalled();
  });

  it('should work sideBarClose()', () => {
    const spyService = spyOn(component, 'sideBarClose');
    component.sideBarClose();
    expect(spyService).toHaveBeenCalled();
  });

  it('should call service method in sideBarClose()', () => {
    const spyService = spyOn(service, 'sideBarClose');
    component.sideBarClose();
    expect(spyService).toHaveBeenCalled();
  });
});
