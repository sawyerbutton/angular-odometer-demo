import { TestBed } from '@angular/core/testing';

import { OdometerService } from './odometer.service';

describe('OdometerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OdometerService = TestBed.get(OdometerService);
    expect(service).toBeTruthy();
  });
});
