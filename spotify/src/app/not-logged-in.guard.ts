import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';
import { inject } from '@angular/core';

export const notLoggedInGuard: CanActivateFn = (route, state) => {
  const loginService: LoginService = inject(LoginService);
  const router: Router = inject(Router);

  if(!loginService.loginEffettuato()) {
    return true;
  }
  else {
    return false;
  }
};