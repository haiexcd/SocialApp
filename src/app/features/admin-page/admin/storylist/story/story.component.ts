import { Component, Input, OnInit } from '@angular/core';
import { NewsfeedStory } from 'src/app/shared/models/newsfeedStory';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass']
})
export class StoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() post? : NewsfeedStory
  @Input() selectedUser: string | undefined


  checkPost() : Boolean {
    if (this.post?.publisherName === this.selectedUser) {
      return true
    } 
    return false
  }

}
