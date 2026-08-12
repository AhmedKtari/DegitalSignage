import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Authservice } from './authservice';

@Injectable({ providedIn: 'root' })
export class RouteGuard implements CanActivate {
  private authService = inject(Authservice);
  private router = inject(Router);

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    console.log('You must be logged in to access this page.');
    return false;
  }
}
