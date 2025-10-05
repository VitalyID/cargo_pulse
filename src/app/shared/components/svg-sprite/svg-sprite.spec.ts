import {
  ChangeDetectorRef,
  DebugElement,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SvgSprite } from './svg-sprite';

describe('SvgSprite', () => {
  let component: SvgSprite;
  let fixture: ComponentFixture<SvgSprite>;
  let debugElement: DebugElement;
  let componentCdRef: ChangeDetectorRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgSprite],
    }).compileComponents();

    fixture = TestBed.createComponent(SvgSprite);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
    componentCdRef = debugElement.injector.get(
      ChangeDetectorRef
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be default icon value', () => {
    expect(component.icon).toBe('');
  });

  it('should set default href attribute', () => {
    const useElement: DebugElement = debugElement.query(
      By.css('use')
    );
    expect(
      useElement.nativeElement.getAttribute('href')
    ).toBe('/assets/icons/symbol-defs.svg#icon-hash');
  });

  it('should set user href attribute', () => {
    component.icon = 'icon-grid';
    componentCdRef.detectChanges();

    const useElement: DebugElement = debugElement.query(
      By.css('use')
    );
    expect(
      useElement.nativeElement.getAttribute('href')
    ).toBe('/assets/icons/symbol-defs.svg#icon-grid');
  });
});
