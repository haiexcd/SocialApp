import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UpdateUser, UserProfile } from '../models/userProfile';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {

  constructor(
    private http: HttpClient,
  ) { }

    getUser(userName: string | undefined) : Observable<UserProfile> {
    return this.http.get<UserProfile>(`http://localhost:3000/users/getProfile/${userName}`)
    }

 
  updateUser(id: string | undefined, body : UpdateUser) : Observable<UserProfile> {
    return this.http.patch<UserProfile>(`http://localhost:3000/users/editProfile/${id}`, body)
  }



  // postComment(id: string | undefined, body: Comment) {
  //   return this.http.patch<Comment>(`http://localhost:3000/news/addComment/${id}`, body)
  // }
}
