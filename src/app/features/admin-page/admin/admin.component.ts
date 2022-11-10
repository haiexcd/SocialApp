import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserProfileId } from 'src/app/shared/models/userProfile';
import { UpdateUserService } from 'src/app/shared/service/update-user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {


  showList = false
  usersList: UserProfileId[] = []

  constructor(
    private service: UpdateUserService,
  ) { }

  ngOnInit(): void {
    this.service.usersSubject.subscribe(values => {
      this.usersList = values
    })
    this.service.getAllUsers()
    this.showList = true
  }

  onDelete(id: string | undefined) {
    this.service.deleteUser(id).subscribe(res => {
      console.log(res)
      this.service.getAllUsers()
    })
  }

}


