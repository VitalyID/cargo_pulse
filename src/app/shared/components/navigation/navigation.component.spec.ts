import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Navigation } from './navigation.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SvgSprite } from '../svg-sprite/svg-sprite';

describe('Navigation', () => {
  let component: Navigation;
  let fixture: ComponentFixture<Navigation>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navigation],
    }).compileComponents();

    fixture = TestBed.createComponent(Navigation);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
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
    const sendData = debugElement.query(By.directive(SvgSprite));
    expect(sendData.componentInstance.icon).toBe('icon-globe');
  });

  it('should to display icon-close', () => {
    component.closeIcon = true;
    component.viewPort.;
  });
});
