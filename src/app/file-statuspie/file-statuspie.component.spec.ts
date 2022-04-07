import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileStatuspieComponent } from './file-statuspie.component';

describe('FileStatuspieComponent', () => {
  let component: FileStatuspieComponent;
  let fixture: ComponentFixture<FileStatuspieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileStatuspieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileStatuspieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
