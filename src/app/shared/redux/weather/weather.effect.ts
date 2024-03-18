import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, of, switchMap, takeUntil, tap } from 'rxjs';
import { getGeolocationSuccess, getWeatherDetailsSuccess, getWeatherForecastByGeolocationSuccess } from './weather.action';
import { WeatherType } from './weather.type';
import { WeatherService } from '@shared/services/weather/weather.service';
import { environment } from '@environments/environment';
import { showPrompt } from '../prompt/prompt.action';
import { Store } from '@ngrx/store';
import { showLoaderCancel } from '../shared/shared.action';

@Injectable()
export class WeatherEffect {
  constructor(
    private store: Store,
    private weatherService: WeatherService,
    private actions$: Actions
  ) {}
  _getWeatherDetails = createEffect(() => {
    return this.actions$.pipe(
      ofType(WeatherType.DETAILS),
      switchMap(({ payload }) => {
        const { city } = payload;
        const params = {
            q: city,
            appid: environment.weather.key,
            units: environment.weather.units
        };
        return this.weatherService.getWeatherByCity(params).pipe(
          filter((data) => data !== undefined),
          map((data) => {
            return getWeatherDetailsSuccess(data);
          }),
          takeUntil(this.actions$.pipe(ofType(WeatherType.DETAILS_CANCEL))),
          catchError(({ error }) => of(showPrompt(error?.message)))
        );
      })
    );
  });
  _getGeolocation = createEffect(() => {
    return this.actions$.pipe(
      ofType(WeatherType.GEOLOCATION),
      switchMap(({ payload }) => {
        const { city } = payload;
        const params = {
            q: city,
            appid: environment.weather.key
        };
        return this.weatherService.getGeolocation(params).pipe(
          filter((data) => data !== undefined),
          map((data) => {
            return getGeolocationSuccess(data);
          }),
          takeUntil(this.actions$.pipe(ofType(WeatherType.GEOLOCATION_CANCEL))),
          catchError(({ error }) => of(showPrompt(error?.message)))
        );
      })
    );
  });

  _getWeatherForecastByGeolocation = createEffect(() => {
    return this.actions$.pipe(
      ofType(WeatherType.FORECAST),
      switchMap(({ payload }) => {
        const { lon, lat } = payload;
        const params = {
          lon,
          lat,
          appid: environment.weather.key,
          units: environment.weather.units
        };
        return this.weatherService.getWeatherForecastByGeolocation(params).pipe(
          filter((data) => data !== undefined),
          map((data) => {
            return getWeatherForecastByGeolocationSuccess(data);
          }),
          tap(() => {
            this.store.dispatch(showLoaderCancel());
          }),
          takeUntil(this.actions$.pipe(ofType(WeatherType.FORECAST_CANCEL))),
          catchError(({ error }) => of(showPrompt(error?.message)))
        );
      })
    );
  });
}
