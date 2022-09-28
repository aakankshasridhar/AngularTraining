import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateRouteGuard implements CanActivate {
  
    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean {
        return true;
    }
}