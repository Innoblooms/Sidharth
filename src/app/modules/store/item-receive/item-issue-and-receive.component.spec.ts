import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemIssueAndReceiveComponent } from './item-issue-and-receive.component';

describe('ItemIssueAndReceiveComponent', () => {
  let component: ItemIssueAndReceiveComponent;
  let fixture: ComponentFixture<ItemIssueAndReceiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemIssueAndReceiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemIssueAndReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
