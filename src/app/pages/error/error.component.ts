import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Url } from '@enum/url';
import { AuthService } from '@shared/services/auth/auth.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorComponent implements OnInit {
  authenticated$: Observable<boolean> = of(false);
  constructor(private _auth: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.authenticated$ = this._auth.isAuthenticated();
  }
  goTo() {
    this.authenticated$.subscribe((authenticated: boolean) => {
      if (authenticated) {
        this.router.navigate([`${Url.weather}`]);
        return;
      }
      this.router.navigate([`${Url.login}`]);
    }).unsubscribe();
  }
}
