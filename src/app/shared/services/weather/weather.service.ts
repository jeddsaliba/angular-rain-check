import { Injectable } from '@angular/core';
import { RestService } from '../rest.service';
import { Observable } from 'rxjs';
import { Url } from '@enum/url';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private rest: RestService) {}
  getGeolocation(params: any): Observable<any> {
    return this.rest.get(
      `geo/1.0/${Url.direct}?${this.rest.restEndpointParams(params)}`
    );
  }
  getWeatherForecastByGeolocation(params: any): Observable<any> {
    return this.rest.get(
      `data/2.5/${Url.forecast}?${this.rest.restEndpointParams(params)}`
    );
  }
  getWeatherByCity(params: any): Observable<any> {
    return this.rest.get(
      `data/2.5/${Url.weather}?${this.rest.restEndpointParams(params)}`
    );
  }
}
