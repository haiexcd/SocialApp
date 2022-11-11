import { Component, OnInit } from '@angular/core';
import { UserProfile, UserProfileId } from 'src/app/shared/models/userProfile';
import { userToken } from 'src/app/shared/models/userToken';
import { PostLoginService } from 'src/app/shared/service/post-login.service';
import { UpdateUserService } from 'src/app/shared/service/update-user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

    userProfile: UserProfile | null | undefined
    token: userToken | null | undefined

  constructor(
    private service: PostLoginService,
    private updateUserService: UpdateUserService
    ) { }

  ngOnInit(): void {
    this.token = this.service.getToken()
    this.updateUserService.getUser(this.token?.userName).subscribe(res => {
      this.userProfile = res
    })
  }




}
