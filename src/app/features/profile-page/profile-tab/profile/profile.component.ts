import { Component, OnInit } from '@angular/core';
import { userToken } from 'src/app/shared/models/userToken';
import { PostLoginService } from 'src/app/shared/service/post-login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

    userProfile: userToken | null | undefined

  constructor(private service: PostLoginService) { }

  ngOnInit(): void {
    this.userProfile = this.service.getToken()
    console.log(this.userProfile)
  }




}
