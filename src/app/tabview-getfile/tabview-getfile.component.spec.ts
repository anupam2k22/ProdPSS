import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabviewGetfileComponent } from './tabview-getfile.component';

describe('TabviewGetfileComponent', () => {
  let component: TabviewGetfileComponent;
  let fixture: ComponentFixture<TabviewGetfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabviewGetfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabviewGetfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
