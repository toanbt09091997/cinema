import { TestBed } from '@angular/core/testing';

import { RefundticketService } from './refundticket.service';

describe('RefundticketService', () => {
  let service: RefundticketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefundticketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
