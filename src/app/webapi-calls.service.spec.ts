import { TestBed } from '@angular/core/testing';

import { WebapiCallsService } from './webapi-calls.service';

describe('WebapiCallsService', () => {
  let service: WebapiCallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebapiCallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
