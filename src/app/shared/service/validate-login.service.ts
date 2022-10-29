import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidateLoginService {

  constructor(
    private http: HttpClient
  ) { }

  checkUsernameValid(email : string) : Observable<boolean> {
    const url = `http://localhost:3000/register/checkExistByEmail/${email}`
    return this.http.get<boolean>(url)
  }
}
