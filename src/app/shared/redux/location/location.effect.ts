import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, of, switchMap, takeUntil, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { environment } from '@environments/environment';
import { LocationService } from '@shared/services/location/location.service';
import { LocationType } from './location.type';
import { getAutocompleteSuccess, setLocationSuccess } from './location.action';
import { setSelectOptions, showSnackbar } from '../shared/shared.action';
import { LocationModel } from './location.model';

@Injectable()
export class LocationEffect {
  constructor(
    private locationService: LocationService,
    private store: Store<Location>,
    private actions$: Actions,
  ) {}
  _getAutocomplete = createEffect(() => {
    return this.actions$.pipe(
      ofType(LocationType.AUTOCOMPLETE),
      filter(({ payload }) => {
        const { city } = payload;
        return city;
      }),
      switchMap(({ payload }) => {
        const { city } = payload;
        const params = {
            text: city,
            apiKey: environment.geoapify.key,
            format: 'json'
        };
        return this.locationService.getAutocomplete(params).pipe(
          filter((data) => data !== undefined),
          map((data) => {
            const { results } = data;
            const select_options = results.map((option: LocationModel) => {
              return {
                label: option.formatted,
                value: option
              }
            });
            this.store.dispatch(setSelectOptions(select_options));
            return getAutocompleteSuccess(results);
          }),
          takeUntil(this.actions$.pipe(ofType(LocationType.AUTOCOMPLETE_CANCEL))),
          catchError(({ error }) => of(showSnackbar(error?.message)))
        );
      })
    );
  });
  _setLocation = createEffect(() => {
    return this.actions$.pipe(
      ofType(LocationType.SET_LOCATION),
      filter(({ payload }) => payload !== undefined),
      tap(({ payload }) => {
        this.store.dispatch(setLocationSuccess(payload));
      })
    );
  }, { dispatch: false });
}
