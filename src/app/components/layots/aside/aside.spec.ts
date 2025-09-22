import { ComponentFixture, TestBed } from '@angular/core/testing';

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

  it('should list of section is created', () => {});

  it('should navigation is worked', () => {});
});
