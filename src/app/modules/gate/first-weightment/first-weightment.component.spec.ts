import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstWeightmentComponent } from './first-weightment.component';

describe('FirstWeightmentComponent', () => {
  let component: FirstWeightmentComponent;
  let fixture: ComponentFixture<FirstWeightmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstWeightmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstWeightmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
