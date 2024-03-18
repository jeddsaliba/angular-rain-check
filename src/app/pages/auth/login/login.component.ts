import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '@redux/auth/auth.action';
import { Auth } from '@redux/auth/auth.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  appName: string = environment.appName;
  constructor(public store: Store<Auth>) {}
  login(): void {
    this.store.dispatch(login());
  }
}
