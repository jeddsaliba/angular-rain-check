import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Auth } from './auth.model';

const authState = createFeatureSelector<Auth>('auth');
export const selectAccessToken = createSelector(
  authState,
  (state: Auth) => state.access_token
);
export const selectLoggedInUser = createSelector(
  authState,
  (state: Auth) => state.user
);
export const selectAuthenticated = createSelector(
  authState,
  (state: Auth) => state.authenticated
);
