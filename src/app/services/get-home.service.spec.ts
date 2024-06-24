import { TestBed } from '@angular/core/testing';

import { GetHomeService } from './get-home.service';

describe('GetHomeService', () => {
  let service: GetHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
