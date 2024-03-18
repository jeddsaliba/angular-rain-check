import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Url } from '@enum/url';
import { environment } from '@environments/environment';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private url = environment.weather.url;
  constructor(private httpClient: HttpClient, private router: Router) {}
  httpHeaders(): { headers: HttpHeaders } {
    let requestHeaders = new HttpHeaders();
    const accessToken = sessionStorage.getItem('access_token');

    if (accessToken?.length) {
      requestHeaders = new HttpHeaders({
        Authorization: `Bearer ${accessToken}`,
      });
    }
    return { headers: requestHeaders };
  }
  restEndpointParams(params: string) {
    return new URLSearchParams(params).toString();
  }

  restEndpoint(endpoint: string): string {
    return `${this.url}/${endpoint}`;
  }
  get(endpoint: string, standalone = false): Observable<unknown> {
    if (standalone) {
      return this.httpClient.get(endpoint, this.httpHeaders())
      .pipe(catchError(this.errorHandler));
    } else {
      return this.httpClient.get(this.restEndpoint(endpoint), this.httpHeaders())
      .pipe(catchError(this.errorHandler));
    }
  }
  post(endpoint: string, body: unknown): Observable<unknown> {
    return this.httpClient.post(
      this.restEndpoint(endpoint),
      body,
      this.httpHeaders()
    ).pipe(catchError(this.errorHandler));
  }

  put(endpoint: string, body: unknown): Observable<unknown> {
    return this.httpClient.put(
      this.restEndpoint(endpoint),
      body,
      this.httpHeaders()
    ).pipe(catchError(this.errorHandler));
  }

  delete(endpoint: string): Observable<unknown> {
    return this.httpClient.delete(
      this.restEndpoint(endpoint),
      this.httpHeaders()
    ).pipe(catchError(this.errorHandler));
  }

  private errorHandler = (response: Response) => {
    switch (response.status) {
      case 401:
      case 403:
        this.router.navigate([`${Url.login}`]);
        break;
      case 404:
        this.router.navigate([`${Url.error}`]);
        break;
      default:
        break;
    }
    return throwError(response);
  }
}
