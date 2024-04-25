import { CanActivateFn } from '@angular/router';

import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

export const livreGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  if (inject(AuthService).isAdmin())
    return true;
  else {
    inject(Router).navigate(['login']);
    return false;
    }
};
