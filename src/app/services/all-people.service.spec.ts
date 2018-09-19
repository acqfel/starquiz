import { TestBed } from '@angular/core/testing';

import { AllPeopleService } from './all-people.service';

describe('AllPeopleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllPeopleService = TestBed.get(AllPeopleService);
    expect(service).toBeTruthy();
  });
});
