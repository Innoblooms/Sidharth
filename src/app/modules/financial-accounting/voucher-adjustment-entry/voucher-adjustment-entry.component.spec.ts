import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherAdjustmentEntryComponent } from './voucher-adjustment-entry.component';

describe('VoucherAdjustmentEntryComponent', () => {
  let component: VoucherAdjustmentEntryComponent;
  let fixture: ComponentFixture<VoucherAdjustmentEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoucherAdjustmentEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoucherAdjustmentEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
