import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTestEntryComponent } from './lab-test-entry.component';

describe('LabTestEntryComponent', () => {
  let component: LabTestEntryComponent;
  let fixture: ComponentFixture<LabTestEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabTestEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabTestEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
