import { TestBed } from '@angular/core/testing';

import { AllPersonService } from './all-person.service';

describe('AllPersonService', () => {
  let service: AllPersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllPersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
