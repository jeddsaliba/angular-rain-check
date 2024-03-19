import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AuthService } from '@services/auth/auth.service';
import { Auth, AuthUserModel } from './auth.model';
import { Router } from '@angular/router';
import { AuthType } from './auth.type';
import { catchError, map, of, switchMap, takeUntil, tap } from 'rxjs';
import {
  getAccessToken,
  getAccessTokenSuccess,
  getLoggedInUser,
  getLoggedInUserSuccess,
  isAuthenticated,
  isAuthenticatedSuccess,
} from './auth.action';
import { Url } from '@enum/url';
import { selectLoggedInUser } from './auth.selector';
import { AuthUserInitialState } from './auth.state';
import { showSnackbar } from '../shared/shared.action';

@Injectable()
export class AuthEffect {
  constructor(
    private authService: AuthService,
    private actions$: Actions,
    private store: Store<Auth>,
    private router: Router
  ) {}
  _login = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthType.LOGIN),
        switchMap(() => {
          return this.authService.login().pipe(
            tap(() => {
              this.store.dispatch(getAccessToken());
              this.store.dispatch(getLoggedInUser());
              this.store.dispatch(isAuthenticated());
              const loggedInUser$ = this.store.select(selectLoggedInUser);
              loggedInUser$.subscribe((user: AuthUserModel) => {
                if (user !== AuthUserInitialState) {
                  this.store.dispatch(showSnackbar(`Welcome, ${user?.name}`));
                  this.router.navigate([`${Url.weather}`]);
                }
              });
            }),
            takeUntil(this.actions$.pipe(ofType(AuthType.LOGIN_CANCEL))),
            catchError(({ error }) => of(showSnackbar(error?.message)))
          );
        })
      );
    },
    {
      dispatch: false,
    }
  );
  _logout = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthType.LOGOUT),
        switchMap(() => {
          const user$ = this.store.select(selectLoggedInUser);
          let message = '';
          user$.subscribe((user: AuthUserModel) => {
            message = `Goodbye, ${user.name}`;
          });
          return this.authService.logout().pipe(
            tap(() => {
              this.store.dispatch(showSnackbar(message));
            }),
            catchError(({ error }) => of(showSnackbar(error?.message)))
          );
        })
      );
    },
    { dispatch: false }
  );
  _getAccessToken = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthType.ACCESS_TOKEN),
      switchMap(() => {
        return this.authService.getAccessToken().pipe(
          map((data) => {
            return getAccessTokenSuccess(data);
          }),
          takeUntil(this.actions$.pipe(ofType(AuthType.ACCESS_TOKEN_CANCEL))),
          catchError(({ error }) => of(showSnackbar(error?.message)))
        );
      })
    );
  });
  _getLoggedInUser = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthType.AUTH_USER),
      switchMap(() => {
        return this.authService.getLoggedInUser().pipe(
          map((data) => {
            return getLoggedInUserSuccess(data);
          }),
          takeUntil(this.actions$.pipe(ofType(AuthType.AUTH_USER_CANCEL))),
          catchError(({ error }) => of(showSnackbar(error?.message)))
        );
      })
    );
  });
  _isAuthenticated = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthType.AUTHENTICATED),
      switchMap(() => {
        return this.authService.isAuthenticated().pipe(
          map((data) => {
            return isAuthenticatedSuccess(data);
          }),
          takeUntil(this.actions$.pipe(ofType(AuthType.AUTHENTICATED_CANCEL))),
          catchError(({ error }) => of(showSnackbar(error?.message)))
        );
      })
    );
  });
}
