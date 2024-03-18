import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, switchMap } from 'rxjs';
import { PromptType } from './prompt.type';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class PromptEffect {
  constructor(private actions$: Actions, private _snackBar: MatSnackBar) {}
  _showPrompt = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(PromptType.PROMPT),
        switchMap(({payload}) => {
          return of(this._snackBar.open(payload, 'OK', { duration: 3000 }));
        })
      );
    },
    { dispatch: false }
  );
}
