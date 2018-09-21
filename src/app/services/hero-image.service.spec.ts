import { TestBed } from '@angular/core/testing';

import { HeroImageService } from './hero-image.service';

describe('HeroImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroImageService = TestBed.get(HeroImageService);
    expect(service).toBeTruthy();
  });
});
