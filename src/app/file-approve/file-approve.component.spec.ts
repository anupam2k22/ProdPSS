import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileApproveComponent } from './file-approve.component';

describe('FileApproveComponent', () => {
  let component: FileApproveComponent;
  let fixture: ComponentFixture<FileApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileApproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
