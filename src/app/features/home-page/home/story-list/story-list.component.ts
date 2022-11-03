import { Component, OnInit } from '@angular/core';
import { NewsfeedStory } from 'src/app/shared/models/newsfeedStory';
import { NewsfeedStoryService } from 'src/app/shared/service/newsfeed-story.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.sass']
})
export class StoryListComponent implements OnInit {

  postList: NewsfeedStory [] = []

  constructor(private service: NewsfeedStoryService) { }

  ngOnInit(): void {

    this.service.storySubject.subscribe(values => {
      this.postList = values;
    })
    this.service.getStoryList()
  }

}
