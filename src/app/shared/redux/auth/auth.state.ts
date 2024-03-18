import { Auth, AuthUserModel } from './auth.model';

export const AuthUserInitialState: AuthUserModel = {
  name: '',
  email: '',
  nickname: '',
  picture: '',
  url: ''
};

export const AuthState: Auth = {
  user: AuthUserInitialState,
  authenticated: false,
  access_token: null
};
