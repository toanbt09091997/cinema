import { TestBed } from '@angular/core/testing';

import { CinemamovieService } from './cinemamovie.service';

describe('CinemamovieService', () => {
  let service: CinemamovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinemamovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
