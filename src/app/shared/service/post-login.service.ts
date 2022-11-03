import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { UserProfile } from '../models/userProfile';
import { userToken } from '../models/userToken';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class PostLoginService {

  constructor(
    private http: HttpClient,
  ) { }


  postLogin(loginBody: Login) : Observable<UserProfile> {
    return this.http.post<UserProfile>('http://localhost:3000/login/', loginBody)
  }

  setToken(token: string) {
    localStorage.setItem("TOKEN",JSON.stringify(token))
  }

  getToken() : userToken | null {
    let token = localStorage.getItem("TOKEN");
    if (token === null) {
      return null;
    } else {
      let raw_data = JSON.parse(token)
      return jwt_decode(raw_data)
    }
  }


}
