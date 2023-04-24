import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorGatePassComponent } from './visitor-gate-pass.component';

describe('VisitorGatePassComponent', () => {
  let component: VisitorGatePassComponent;
  let fixture: ComponentFixture<VisitorGatePassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorGatePassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorGatePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
