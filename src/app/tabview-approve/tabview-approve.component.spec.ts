import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabviewApproveComponent } from './tabview-approve.component';

describe('TabviewApproveComponent', () => {
  let component: TabviewApproveComponent;
  let fixture: ComponentFixture<TabviewApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabviewApproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabviewApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
