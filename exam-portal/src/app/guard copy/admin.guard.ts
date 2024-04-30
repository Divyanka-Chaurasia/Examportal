import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Inject, inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router=inject(Router);
  if(loginService.isloggedIn() && loginService.getUserRole()==="ADMIN")
  {
    return true;
  }
  else{
 
   router.navigate(['/login']);
  return false;
  }
};
