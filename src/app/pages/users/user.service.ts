import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SingleReponse, SWReponse, User } from "./user/user.interface";
import { Observable } from 'rxjs';
import { UserPost, UserUpdate } from "./user/user-post.interface";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private baseUrl: string = 'https://devautentica.brainyinteligencia.com/';
  private users: string = 'users/'

  // private headers: HttpHeaders = new HttpHeaders()
  //  .set('Authorization', 'Bearer');

  private headers!: HttpHeaders;

  constructor(private httpClient: HttpClient) { }

  setTokenOnHeaders(): HttpHeaders {
    let token = localStorage.getItem('token');

    if (token != null && token != "") {
      this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + token)
    }

    return this.headers;
  }

  getUsers(): Observable<SWReponse> {
    return this.httpClient.get<SWReponse>(this.baseUrl + this.users, { headers: this.setTokenOnHeaders() });
  }

  getSingleUser(userId: number): Observable<SingleReponse> {
    return this.httpClient.get<SingleReponse>(this.baseUrl + this.users + userId, { headers: this.setTokenOnHeaders() });
  }

  create(postUser: UserPost) {
    return this.httpClient.post<UserPost>(this.baseUrl + this.users, postUser, { headers: this.setTokenOnHeaders() });
  }

  update(id: string, postUser: UserUpdate) {
    return this.httpClient.put(this.baseUrl + this.users + id, postUser, { headers: this.setTokenOnHeaders() });
  }

  delete(id: string) {
    return this.httpClient.delete(this.baseUrl + this.users + id, { headers: this.setTokenOnHeaders() });
  }
}
