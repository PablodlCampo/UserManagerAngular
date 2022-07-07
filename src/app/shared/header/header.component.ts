import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user !: string | null;

  constructor(private loginSevice: LoginService) { }

  checkIsLogged() {
    this.user = localStorage.getItem('user') ?? null;
    return this.loginSevice.isLoggedIn();
  }

  logOut() {
    this.loginSevice.logout();
  }
}
