import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileGetfilefromtcnComponent } from './file-getfilefromtcn.component';

describe('FileGetfilefromtcnComponent', () => {
  let component: FileGetfilefromtcnComponent;
  let fixture: ComponentFixture<FileGetfilefromtcnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileGetfilefromtcnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileGetfilefromtcnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
