import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabviewGettcnComponent } from './tabview-gettcn.component';

describe('TabviewGettcnComponent', () => {
  let component: TabviewGettcnComponent;
  let fixture: ComponentFixture<TabviewGettcnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabviewGettcnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabviewGettcnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
