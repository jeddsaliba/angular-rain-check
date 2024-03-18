import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Url } from '@enum/url';
import { AuthService } from '@shared/services/auth/auth.service';
import { filter, map } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.isAuthenticated().pipe(
    filter((authenticated) => authenticated !== undefined),
    map((authenticated) => {
      if (!authenticated) {
        router.navigate([`${Url.login}`]);
        return false;
      }
      return true;
    })
  )
};
