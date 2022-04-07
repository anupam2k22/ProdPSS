import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabviewDeleteComponent } from './tabview-delete.component';

describe('TabviewDeleteComponent', () => {
  let component: TabviewDeleteComponent;
  let fixture: ComponentFixture<TabviewDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabviewDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabviewDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
