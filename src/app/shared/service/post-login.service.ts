import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { UserProfile } from '../models/userProfile';

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


}
