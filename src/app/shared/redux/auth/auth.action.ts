import { createAction } from '@ngrx/store';
import { AuthType } from './auth.type';

export const login = createAction(AuthType.LOGIN);
export const loginSuccess = createAction(
  AuthType.LOGIN_SUCCESS,
  (payload: any) => ({ payload })
);
export const loginCancel = createAction(AuthType.LOGIN_CANCEL);

export const logout = createAction(AuthType.LOGOUT);

export const logoutSuccess = createAction(
  AuthType.LOGOUT_SUCCESS,
  (payload: any) => ({
    payload,
  })
);
export const logoutCancel = createAction(AuthType.LOGOUT_CANCEL);

export const getAccessToken = createAction(AuthType.ACCESS_TOKEN);
export const getAccessTokenSuccess = createAction(
  AuthType.ACCESS_TOKEN_SUCCESS,
  (payload: any) => ({ payload })
);
export const getAccessTokenCancel = createAction(AuthType.ACCESS_TOKEN_CANCEL);

export const getLoggedInUser = createAction(AuthType.AUTH_USER);
export const getLoggedInUserSuccess = createAction(
  AuthType.AUTH_USER_SUCCESS,
  (payload: any) => ({ payload })
);
export const getLoggedInUserCancel = createAction(AuthType.AUTH_USER_CANCEL);

export const isAuthenticated = createAction(AuthType.AUTHENTICATED);
export const isAuthenticatedSuccess = createAction(
  AuthType.AUTHENTICATED_SUCCESS,
  (payload: any) => ({ payload })
);
export const isAuthenticatedCancel = createAction(
  AuthType.AUTHENTICATED_CANCEL
);
