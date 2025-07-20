import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth';

export const authGuard: CanActivateFn = (route, state) => {
 
 const auth = inject(AuthService);
 const router = inject(Router);

 if(!auth.hasToken()){
  router.navigate(['/login']);
  return false;
 }
 
  return true;
};
