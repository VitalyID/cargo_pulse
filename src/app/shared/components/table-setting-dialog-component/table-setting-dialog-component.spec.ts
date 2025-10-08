import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSettingDialogComponent } from './table-setting-dialog-component';

describe('TableSettingDialogComponent', () => {
  let component: TableSettingDialogComponent;
  let fixture: ComponentFixture<TableSettingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableSettingDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSettingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
