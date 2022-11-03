import { Component, Input, OnInit } from '@angular/core';
import { Content, LikeList, NewsfeedStory } from 'src/app/shared/models/newsfeedStory';
import { NewsfeedStoryService } from 'src/app/shared/service/newsfeed-story.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass']
})
export class StoryComponent implements OnInit {

  constructor(private service: NewsfeedStoryService) { }

  ngOnInit(): void {
  }

  @Input() post? : NewsfeedStory;

  saveLike() {
    const post: LikeList = {
      publisherName: this.post?.publisherName as string,
      publisherTime: this.post?.publisherTime as string,
      content: this.post?.content as Content,
      _id: this.post?._id as string
    };
    this.service.addToLikedList(post)
  }

}
