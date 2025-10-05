import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import {
  NAVIGATION_ICONS,
  NAVIGATION_LABELS,
  NavigationItems,
} from 'src/types/enums/listMenuItems';
import { Aside } from './aside';
import { AsideModule } from './aside.module';

describe('Aside', () => {
  let component: Aside;
  let fixture: ComponentFixture<Aside>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Aside);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should length list of section is matched length NavigationItems', () => {
    const createdList = component.createNavigationItems();
    expect(createdList.length).toEqual(
      Object.entries(NavigationItems).length
    );
  });

  it('should keys of list of section is matched values of NAVIGATION_LABELS', () => {
    const createdList = component.createNavigationItems();
    const keys = createdList.map(section => {
      return section.title;
    });
    expect(keys).toEqual(Object.values(NAVIGATION_LABELS));
  });

  it('should values of list of section is matched values of NAVIGATION_LABELS', () => {
    const createdList = component.createNavigationItems();
    const values = createdList.map(section => {
      return section.icon;
    });
    expect(values).toEqual(Object.values(NAVIGATION_ICONS));
  });

  it('should call navigateToSection()', () => {
    const spy = spyOn(component, 'navigateToSection');
    component.navigateToSection();
    expect(spy).toHaveBeenCalled();
  });

  it('should navigation() is worked', () => {});

  it('should be called createNavigationItems()', () => {
    const spy = spyOn(component, 'createNavigationItems');
    component.createNavigationItems();
    expect(spy).toHaveBeenCalled();
  });

  it('should closeMenu() is worked', () => {
    const spy = spyOn(component, 'closeMenu');
    component.closeMenu();
    expect(spy).toHaveBeenCalled();
  });

  it('should updateMenuState(false) from closeMenu()', () => {
    const spy = spyOn(component, 'updateMenuState');
    component.closeMenu();
    expect(spy).toHaveBeenCalledOnceWith(false);
  });

  it('should userOpenMenu() is worked', () => {
    const spy = spyOn(component, 'userOpenMenu');
    component.userOpenMenu();
    expect(spy).toHaveBeenCalled();
  });

  it('should updateMenuState(true) from userOpenMenu()', () => {
    const spy = spyOn(component, 'updateMenuState');
    component.userOpenMenu();
    expect(spy).toHaveBeenCalledOnceWith(true);
  });

  it('should call updateMenuState with false', () => {
    const spy = spyOn(component, 'updateMenuState');
    component.updateMenuState(false);
    expect(spy).toHaveBeenCalledWith(false);
    component.updateMenuState(true);
    expect(spy).toHaveBeenCalledWith(true);
  });

  it('should updateMenuState is worked(false)', () => {
    component.updateMenuState(false);
    const state = component.navigationItems.map(isOpen => {
      return isOpen.isOpenMenu;
    });
    const result = state.every(state => {
      return !state;
    });
    expect(result).toBeTruthy();
  });

  it('should updateMenuState is worked(true)', () => {
    component.updateMenuState(true);
    const state = component.navigationItems.map(isOpen => {
      return isOpen.isOpenMenu;
    });
    const result = state.every(state => {
      return state;
    });
    expect(result).toBeTruthy();
  });
});
