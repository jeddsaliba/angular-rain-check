import { TestBed } from '@angular/core/testing';

import { LocationService } from './location.service';
import { SharedModule } from '@shared/shared.module';

describe('LocationService', () => {
  let service: LocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ]
    });
    service = TestBed.inject(LocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
