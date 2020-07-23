import { TestBed } from '@angular/core/testing';

import { DetailsGuardService } from './details-guard.service';

describe('DetailsGuardService', () => {
  let service: DetailsGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
