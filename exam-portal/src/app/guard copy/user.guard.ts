import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';

export const userGuard: CanActivateFn = (route, state) => {

  const loginService = inject(LoginService);
  const router=inject(Router);
  if(loginService.isloggedIn() && loginService.getUserRole()==="USER")
  {
    return true;
  }
  else{
   router.navigate(['/login']);
  return false;
  }
  
};