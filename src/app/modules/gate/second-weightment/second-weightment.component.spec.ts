import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondWeightmentComponent } from './second-weightment.component';

describe('SecondWeightmentComponent', () => {
  let component: SecondWeightmentComponent;
  let fixture: ComponentFixture<SecondWeightmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondWeightmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondWeightmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
