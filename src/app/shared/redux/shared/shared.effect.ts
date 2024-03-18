import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import { SharedType } from './shared.type';
import { setSelectOptionsSuccess, showLoaderSuccess } from './shared.action';

@Injectable()
export class SharedEffect {
  constructor(
    private actions$: Actions
  ) {}
  _setSelectOptions = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedType.SELECT_OPTIONS),
      map(({payload}) => {
        return setSelectOptionsSuccess(payload);
      })
    );
  });
  _showLoader = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedType.SHOW_LOADER),
      map(({payload}) => {
        return showLoaderSuccess(payload);
      })
    );
  });
}
