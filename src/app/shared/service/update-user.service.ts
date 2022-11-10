import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UpdateUser, UserProfile, UserProfileId } from '../models/userProfile';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {

  usersList: UserProfileId[] = []
  usersSubject = new BehaviorSubject<UserProfileId[]>([])

  constructor(
    private http: HttpClient,
  ) { }

  getAllUsers() {
    this.http.get<UserProfileId[]>('http://localhost:3000/users/getAllUsers').subscribe(values => {
      this.usersList = values
      this.usersSubject.next(this.usersList.reverse())
    })
  }

  getUser(userName: string | undefined): Observable<UserProfile> {
    return this.http.get<UserProfile>(`http://localhost:3000/users/getProfile/${userName}`)
  }


  updateUser(id: string | undefined, body: UpdateUser): Observable<UserProfile> {
    return this.http.patch<UserProfile>(`http://localhost:3000/users/editProfile/${id}`, body)
  }

  deleteUser(id: string | undefined) {
    return this.http.delete(`http://localhost:3000/users/deleteUser/${id}`)
  }


}
