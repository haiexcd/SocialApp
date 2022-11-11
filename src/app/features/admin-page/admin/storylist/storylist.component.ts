import { Component, Input, OnInit } from '@angular/core';
import { NewsfeedStory } from 'src/app/shared/models/newsfeedStory';
import { NewsfeedStoryService } from 'src/app/shared/service/newsfeed-story.service';

@Component({
  selector: 'app-storylist',
  templateUrl: './storylist.component.html',
  styleUrls: ['./storylist.component.sass']
})
export class StorylistComponent implements OnInit {

  postList: NewsfeedStory[] = []

  constructor(
    private service: NewsfeedStoryService, 
  ) { }

  @Input() user: string | undefined

  ngOnInit(): void {



    this.service.storySubject.subscribe(values => {
      this.postList = values
    })
    this.service.getStoryList()
  }

}





