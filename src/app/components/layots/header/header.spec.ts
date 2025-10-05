import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SvgSprite } from './../../../shared/components/svg-sprite/svg-sprite';

import { DebugElement } from '@angular/core';
import { ToggleMenuService } from 'src/app/services/toggleMenu/toggleMenu.service';
import { Header } from './header';
import { HeaderModule } from './header.module';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;
  let toggleMenuService: ToggleMenuService;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderModule, SvgSprite],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
    toggleMenuService = TestBed.inject(ToggleMenuService);
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ToggleMenuService', () => {
    const icon = debugElement.query(
      By.css('app-svg-sprite')
    );
    const spyClick = spyOn(component, 'toggleMenu');
    icon.nativeElement.dispatchEvent(new Event('click'));
    expect(spyClick).toHaveBeenCalled();
  });

  it('should call service by click toggleMenu()', () => {
    const spyService = spyOn(
      toggleMenuService,
      'sideBarOpen'
    );
    component.toggleMenu();
    expect(spyService).toHaveBeenCalled();
  });
});
