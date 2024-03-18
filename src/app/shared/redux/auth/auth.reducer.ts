import { createReducer, on } from '@ngrx/store';
import { getAccessTokenSuccess, getLoggedInUserSuccess, isAuthenticatedSuccess } from './auth.action';
import { AuthState } from './auth.state';
import { Url } from '@enum/url';

const _authReducer = createReducer(
  AuthState,
  on(getAccessTokenSuccess, (state, {payload}) => {
    return {
      ...state,
      access_token: payload
    };
  }),
  on(getLoggedInUserSuccess, (state, {payload}) => {
    const loggedInUser = {
      ...payload,
      url: `${Url.github}/${payload.nickname}`
    }
    return {
      ...state,
      user: loggedInUser
    };
  }),
  on(isAuthenticatedSuccess, (state, {payload}) => {
    return {
      ...state,
      authenticated: payload
    };
  }),
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}
