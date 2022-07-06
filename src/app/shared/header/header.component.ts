import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private loginSevice: LoginService, private router: Router) { }

  checkIsLogged() {
    return this.loginSevice.isLoggedIn();
  }

  logOut() {
    this.loginSevice.logout();
    this.router.navigate(['/login']);
  }
}
