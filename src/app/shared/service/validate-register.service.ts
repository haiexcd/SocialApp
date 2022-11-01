import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfile } from '../models/userProfile';

@Injectable({
  providedIn: 'root'
})
export class ValidateRegisterService {

  constructor(private http: HttpClient) { }

  checkEmailValid(email: string) : Observable<boolean> {
    const url = `http://localhost:3000/register/checkExistByEmail/${email}`
    return this.http.get<boolean>(url)
  }

  checkUsernameValid(username: string) : Observable<boolean> {
    const url = `http://localhost:3000/register/checkExistByUsername/${username}`
    return this.http.get<boolean>(url)
  }

  registerUser(profile: UserProfile) : Observable<UserProfile> {
    return this.http.post<UserProfile>('http://localhost:3000/register/createNewAccount', profile)
  }
}
