import { Component, OnInit } from '@angular/core';
import { NewsfeedStory } from 'src/app/shared/models/newsfeedStory';
import { NewsfeedStoryService } from 'src/app/shared/service/newsfeed-story.service';

@Component({
  selector: 'app-list-dialog',
  templateUrl: './list-dialog.component.html',
  styleUrls: ['./list-dialog.component.sass']
})
export class ListDialogComponent implements OnInit {
  likeList: NewsfeedStory[] = []

  constructor(private service: NewsfeedStoryService) { }

  ngOnInit(): void {
    this.service.likedListSubject.subscribe(res => {
      this.likeList = res
    })
  }

  deleteLike(postId: string | undefined) {
    this.service.deleteFromLikedList(postId)
    this.ngOnInit();
  }



}
