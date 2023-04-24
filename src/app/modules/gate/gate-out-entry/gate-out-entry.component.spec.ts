import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GateOutEntryComponent } from './gate-out-entry.component';

describe('GateOutEntryComponent', () => {
  let component: GateOutEntryComponent;
  let fixture: ComponentFixture<GateOutEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GateOutEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GateOutEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
