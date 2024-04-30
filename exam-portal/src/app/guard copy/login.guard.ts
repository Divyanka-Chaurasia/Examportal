import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';
export const loginGuard: CanActivateFn = (route, state) => {
const loginService = inject(LoginService);
const router=inject(Router);
if (loginService.isloggedIn()) {
  return false;
} else {
  return true;
}
};