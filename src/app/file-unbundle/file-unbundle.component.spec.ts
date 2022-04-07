import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUnbundleComponent } from './file-unbundle.component';

describe('FileUnbundleComponent', () => {
  let component: FileUnbundleComponent;
  let fixture: ComponentFixture<FileUnbundleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUnbundleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUnbundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
