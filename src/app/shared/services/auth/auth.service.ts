import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService as Auth } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _auth: Auth) {}

  login(): Observable<any> {
    return this._auth.loginWithPopup();
  }
  getAccessToken(): Observable<any> {
    return this._auth.getAccessTokenSilently();
  }
  isAuthenticated(): Observable<boolean> {
    return this._auth.isAuthenticated$;
  }
  getLoggedInUser(): Observable<any> {
    return this._auth.user$;
  }
  logout(): Observable<any> {
    return this._auth.logout();
  }
}
