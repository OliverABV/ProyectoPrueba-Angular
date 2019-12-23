import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AutorizacionService } from '../services/autorizacion.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, 
    private autentificacion: AutorizacionService){}

  canActivate(
    router: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      const currentUser = this.autentificacion.currentUserValue;

      if(currentUser){
        console.log('Usuario autorizado');
        return true;
      }
      console.log('Usuario no autorizado');
      this.router.navigate(['/login']);
      return false;
    }
}
