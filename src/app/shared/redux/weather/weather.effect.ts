import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, of, switchMap, takeUntil, tap } from 'rxjs';
import { getWeatherForecastByGeolocationSuccess } from './weather.action';
import { WeatherType } from './weather.type';
import { WeatherService } from '@shared/services/weather/weather.service';
import { environment } from '@environments/environment';
import { Store } from '@ngrx/store';
import { showLoaderCancel, showSnackbar } from '../shared/shared.action';

@Injectable()
export class WeatherEffect {
  constructor(
    private store: Store,
    private weatherService: WeatherService,
    private actions$: Actions
  ) {}
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
          catchError(({ error }) => of(showSnackbar(error?.message)))
        );
      })
    );
  });
}
