export enum AuthType {
    LOGIN = '[AUTH API] Login',
    LOGIN_SUCCESS = '[AUTH API] Login Success',
    LOGIN_CANCEL = '[AUTH API] Login Cancel',

    LOGOUT = '[AUTH API] Logout',
    LOGOUT_SUCCESS = '[AUTH API] Logout Success',
    LOGOUT_CANCEL = '[AUTH API] Logout Cancel',

    ACCESS_TOKEN = '[AUTH API] Access Token',
    ACCESS_TOKEN_SUCCESS = '[AUTH API] Access Token Success',
    ACCESS_TOKEN_CANCEL = '[AUTH API] Access Token Cancel',

    AUTH_USER = '[AUTH API] User Details',
    AUTH_USER_SUCCESS = '[AUTH API] User Details Success',
    AUTH_USER_CANCEL = '[AUTH API] User Details Cancel',

    AUTHENTICATED = '[AUTH API] Authenticated',
    AUTHENTICATED_SUCCESS = '[AUTH API] Authenticated Success',
    AUTHENTICATED_CANCEL = '[AUTH API] Authenticated Cancel',
}