import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { inject, Injectable } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  console.log("hitting")
  // const router = inject(Router);
  // router.navigate(['/login']);
  return true;
};
// @Injectable({

//   providedIn: 'root'

// })
// export class authGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}


//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     console.log("hitting")
//     return false;
//   }
// }