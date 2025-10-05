import { DebugElement } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MENU_ANIMATION_DELAY } from 'src/app/const';
import { ToggleMenuService } from 'src/app/services/toggleMenu/toggleMenu.service';
import { ViewPortService } from 'src/app/services/viewport/viewport.service';
import { SvgSprite } from '../svg-sprite/svg-sprite';
import { Navigation } from './navigation.component';

describe('Navigation', () => {
  let component: Navigation;
  let fixture: ComponentFixture<Navigation>;
  let debugElement: DebugElement;
  let viewService: ViewPortService;
  let menuService: ToggleMenuService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navigation],
      providers: [ViewPortService, ToggleMenuService],
    }).compileComponents();

    fixture = TestBed.createComponent(Navigation);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    viewService = TestBed.inject(ViewPortService);
    menuService = TestBed.inject(ToggleMenuService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display "No title" when title is not provided', () => {
    fixture.detectChanges();
    const span = debugElement.query(By.css('span'));
    expect(span.nativeElement.textContent).toBe('No title');
  });

  it('should to display user text', () => {
    component.title = 'hello';
    fixture.detectChanges();
    const span = debugElement.query(By.css('span'));
    expect(span.nativeElement.textContent).toBe('hello');
  });

  it('should to send icon to svg-component', () => {
    component.icon = 'icon-globe';
    fixture.detectChanges();
    const sendData = debugElement.query(
      By.directive(SvgSprite)
    );
    expect(sendData.componentInstance.icon).toBe(
      'icon-globe'
    );
  });

  it('should to display icon-close', () => {
    component.closeIcon = true;
    viewService.isAdaptiveSize.next({ TABLET: true });
    fixture.detectChanges();
    const iconClose = debugElement.query(
      By.css('app-svg-sprite[icon="icon-x-circle"]')
    );
    expect(iconClose).toBeTruthy();
  });

  it('should call openAsideSection() when viewport is TABLET and menu is closed', () => {
    const spyOpenAsideSection = spyOn(
      component,
      'openAsideSection'
    );
    component.isOpenMenu = false;

    const sectionTitle = debugElement.query(
      By.css('.navigation__icon')
    );
    sectionTitle.nativeElement.dispatchEvent(
      new Event('click')
    );
    viewService.isAdaptiveSize.next({ TABLET: false });
    fixture.detectChanges();
    expect(spyOpenAsideSection).toHaveBeenCalled();
  });

  it('should be navigateToSection() when is navigation__title is open', () => {
    const spyNavigateToSection = spyOn(
      component,
      'navigateToSection'
    );
    const sectionTitle = debugElement.query(
      By.css('.navigation__icon')
    );
    component.isOpenMenu = true;
    sectionTitle.nativeElement.dispatchEvent(
      new Event('click')
    );
    fixture.detectChanges();
    expect(spyNavigateToSection).toHaveBeenCalled();
  });

  it('should emit to parent to close menu', () => {
    const closeMenu = component.closeMenu;
    const spyEmit = spyOn(closeMenu, 'emit');
    component.menuOff();
    expect(spyEmit).toHaveBeenCalledWith(true);
  });

  it('should emit userOpenMenu after MENU_ANIMATION_DELAY', fakeAsync(() => {
    const spyEmit = spyOn(component.userOpenMenu, 'emit');
    component.openAsideSection();
    fixture.detectChanges();
    tick(MENU_ANIMATION_DELAY);
    expect(spyEmit).toHaveBeenCalledWith(true);
  }));

  it('should router to path', () => {
    const spyNav = spyOn(router, 'navigate');
    component.navigateToSection('path');
    const expectedPath = '/path';
    expect(spyNav).toHaveBeenCalledWith([expectedPath]);
  });

  it('should destroy setTimeout', fakeAsync(() => {
    const spyClearTimeOut = spyOn(
      component,
      'clearTimeoutFn'
    );
    component.openAsideSection();
    component.timeoutID = 56;
    component.ngOnDestroy();
    tick(MENU_ANIMATION_DELAY);

    fixture.detectChanges();
    expect(spyClearTimeOut).toHaveBeenCalledWith(56);
  }));

  it('should call open-method in ToggleMenuService', () => {
    const spyService = spyOn(menuService, 'sideBarOpen');
    component.openAsideSection();
    fixture.detectChanges();
    expect(spyService).toBeTruthy();
  });

  it('should call close-method in ToggleMenuService', () => {
    const spyService = spyOn(menuService, 'sideBarClose');
    component.menuOff();
    fixture.detectChanges();
    expect(spyService).toBeTruthy();
  });

  it('should set class "open" on div "navigation__title"', fakeAsync(() => {
    const div = debugElement.query(
      By.css('.navigation__title')
    );
    menuService.sideBarOpen();
    fixture.detectChanges();
    tick();
    const classOpen =
      div.nativeElement.classList.contains('open');
    expect(classOpen).toBeTruthy();
  }));

  it('should remove class "open" on div "navigation__title"', fakeAsync(() => {
    const div = debugElement.query(
      By.css('.navigation__title')
    );
    menuService.sideBarClose();
    fixture.detectChanges();
    tick();
    const classOpen =
      div.nativeElement.classList.contains('open');
    expect(classOpen).toBeFalsy();
  }));
});
