import { Injectable } from '@angular/core';
import { RestService } from '../rest.service';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  url = environment.geoapify.url;
  constructor(private rest: RestService) {}
  getAutocomplete(params: any): Observable<any> {
    return this.rest.get(
      `${this.url}/geocode/autocomplete?${this.rest.restEndpointParams(params)}`, true
    );
  }
}
