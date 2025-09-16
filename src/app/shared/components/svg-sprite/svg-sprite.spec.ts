import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgSprite } from './svg-sprite';

describe('SvgSprite', () => {
  let component: SvgSprite;
  let fixture: ComponentFixture<SvgSprite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgSprite]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgSprite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
