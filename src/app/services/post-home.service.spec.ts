import { TestBed } from '@angular/core/testing';

import { PostHomeService } from './post-home.service';

describe('PostHomeService', () => {
  let service: PostHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
