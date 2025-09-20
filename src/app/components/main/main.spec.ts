import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main } from './main';
import { MainModule } from './main.module';

describe('Main', () => {
  let component: Main;
  let fixture: ComponentFixture<Main>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Main);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be create b header element', () => {
    const header = compiled.querySelector('header');
    expect(header).toBeTruthy;
  });

  it('should be create a body', () => {
    const main = compiled.querySelector('main');
    expect(main).toBeTruthy;
  });

  it('should be created a footer', () => {
    const footer = compiled.querySelector('footer');
    expect(footer).toBeTruthy;
  });
});
