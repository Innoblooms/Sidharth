import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstVoucherComponent } from './gst-voucher.component';

describe('GstVoucherComponent', () => {
  let component: GstVoucherComponent;
  let fixture: ComponentFixture<GstVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GstVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GstVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
