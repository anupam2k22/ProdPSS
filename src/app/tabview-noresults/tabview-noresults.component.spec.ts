import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabviewNoresultsComponent } from './tabview-noresults.component';

describe('TabviewNoresultsComponent', () => {
  let component: TabviewNoresultsComponent;
  let fixture: ComponentFixture<TabviewNoresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabviewNoresultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabviewNoresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
