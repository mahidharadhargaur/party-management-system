import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthenticationService } from '../authentication/services/authentication.service';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const isLoggedIn = inject(AuthenticationService).isLoggedIn;
  const router = inject(Router);

  if (!isLoggedIn) {
    router.navigate(['/auth']);
  }
  return isLoggedIn;
};
