import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NewsfeedStory } from 'src/app/shared/models/newsfeedStory';
import { NewsfeedStoryService } from 'src/app/shared/service/newsfeed-story.service';
import { PostLoginService } from 'src/app/shared/service/post-login.service';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.sass']
})
export class PostformComponent implements OnInit {

  form: FormGroup = new FormGroup({
    text: new FormControl(''),
  })

  constructor(
    private service: NewsfeedStoryService,
    private tokenService: PostLoginService,
  ) { }

  ngOnInit(): void {
  }

  onPostButtonClick() {
    const userToken = this.tokenService.getToken()
    const userName = userToken?.userName
    const story : NewsfeedStory = {
      publisherName: userName,
      content: {
        text: this.form.controls['text'].value
      }
    }
    this.service.postStory(story).subscribe(res => {
      console.log(res)
      this.service.getStoryList()
    })
    this.form.reset()
  }

}
