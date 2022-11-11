import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NewsfeedStory } from 'src/app/shared/models/newsfeedStory';
import { UserProfile } from 'src/app/shared/models/userProfile';
import { userToken } from 'src/app/shared/models/userToken';
import { NewsfeedStoryService } from 'src/app/shared/service/newsfeed-story.service';
import { PostLoginService } from 'src/app/shared/service/post-login.service';
import { UpdateUserService } from 'src/app/shared/service/update-user.service';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.sass']
})
export class PostformComponent implements OnInit {


  userProfile: UserProfile | null | undefined
  token: userToken | null | undefined


  form: FormGroup = new FormGroup({
    text: new FormControl(''),
  })

  constructor(
    private service: NewsfeedStoryService,
    private tokenService: PostLoginService,
    private updateUserService: UpdateUserService,
  ) { }

  ngOnInit(): void {
    this.token = this.tokenService.getToken()
    this.updateUserService.getUser(this.token?.userName).subscribe(res => {
      this.userProfile = res
    })
  

  }

  onPostButtonClick() {
    const userToken = this.token
    const userName = userToken?.userName
    const story : NewsfeedStory = {
      publisherName: userName,
      publisherImg: this.userProfile?.img,
      content: {
        text: this.form.controls['text'].value
      }
    }
    console.log(this.userProfile?.img)
    this.service.postStory(story).subscribe(res => {
      console.log(res)
      this.service.getStoryList()
    })
    this.form.reset()
  }

}

