import { Component, Input, OnInit } from '@angular/core';
import { NewsfeedStory } from 'src/app/shared/models/newsfeedStory';
import { NewsfeedStoryService } from 'src/app/shared/service/newsfeed-story.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass']
})
export class StoryComponent implements OnInit {

  constructor(
    private service: NewsfeedStoryService,
  ) { }

  ngOnInit(): void {
  }

  @Input() post?: NewsfeedStory
  @Input() selectedUser: string | undefined


  checkPost(): Boolean {
    if (this.post?.publisherName === this.selectedUser) {
      return true
    }
    return false
  }

  deletePost(id: string | undefined) {
    this.service.deletePost(id).subscribe(res => {
      console.log(res)
      this.service.getStoryList()
    })
  }

}


