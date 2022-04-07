import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileGettcnfromfileComponent } from './file-gettcnfromfile.component';

describe('FileGettcnfromfileComponent', () => {
  let component: FileGettcnfromfileComponent;
  let fixture: ComponentFixture<FileGettcnfromfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileGettcnfromfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileGettcnfromfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
