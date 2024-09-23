import { TestBed } from '@angular/core/testing';

import { ActuallyGoodAnimeService } from './actually-good-anime-service.service';

describe('ActuallyGoodAnimeServiceService', () => {
  let service: ActuallyGoodAnimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActuallyGoodAnimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
