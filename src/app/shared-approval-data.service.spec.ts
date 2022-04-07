import { TestBed } from '@angular/core/testing';

import { SharedApprovalDataService } from './shared-approval-data.service';

describe('SharedApprovalDataService', () => {
  let service: SharedApprovalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedApprovalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
