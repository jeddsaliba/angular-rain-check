import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { SharedModule } from '@shared/shared.module';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ]
    });
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
