import { CanActivateFn } from '@angular/router';


import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

authService: AuthService
export const adminGuard: CanActivateFn = (route : ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
   

  if (inject(AuthService).isAdminVIP())
    return true;
  else {
    inject(Router).navigate(['app-forbidden']);
    return false;
    }
};


