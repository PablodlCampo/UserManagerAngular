import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { Buffer } from 'buffer';
import { LoginResponse } from "./login.interface";
import { tap } from 'rxjs/operators';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private loginUrl: string = 'https://devautentica.brainyinteligencia.com/tokens?scope=auth';

  private headers!: HttpHeaders;

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(user: string, password: string): Observable<LoginResponse> {
    let base64Data: string = Buffer.from(user + ":" + password).toString('base64');
    this.headers = new HttpHeaders().set('Authorization', " Basic " + base64Data);

    return this.httpClient.get<LoginResponse>(this.loginUrl, { headers: this.headers })
      .pipe(
        tap((response: LoginResponse) =>{
            localStorage.setItem('token', response.data.jwt),
            localStorage.setItem('user', user)
        } ))
  }

  logout() {
    localStorage.setItem('token', "");
    localStorage.setItem('user', "");
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    let token = localStorage.getItem('token');

    if (token != "" && token != null) {
      return true;
    }

    return false;
  }
}
