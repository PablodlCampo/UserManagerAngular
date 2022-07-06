import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../login/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(): boolean {

    let isLoggedIn = this.loginService.isLoggedIn();

    if(isLoggedIn){
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}
