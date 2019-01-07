import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LocalStorage } from './LocalStorage.service';

const ENTRANCE_URL: string = 'Cinema/Login';

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(
	  public localStorage: LocalStorage, 
	  public router: Router) {}

  canActivate(): boolean {
	   if(!this.localStorage.isAuthenticated()) {
		   this.router.navigate([ENTRANCE_URL]);
		   return false;
	   }
	   return true;
  }
}