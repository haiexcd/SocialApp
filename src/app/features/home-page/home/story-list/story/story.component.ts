import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Content, LikeList, NewsfeedStory } from 'src/app/shared/models/newsfeedStory';
import { NewsfeedStoryService } from 'src/app/shared/service/newsfeed-story.service';
import { CommentListComponent } from './comment-list/comment-list.component';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass']
})
export class StoryComponent implements OnInit {

  constructor(
    private service: NewsfeedStoryService,
    private dialog: MatDialog,
    ) { }

  ngOnInit(): void {
  }

  @Input() post? : NewsfeedStory;

  saveLike() {
    const post: LikeList = {
      publisherName: this.post?.publisherName as string,
      publisherTime: this.post?.publisherTime as string,
      content: this.post?.content as Content,
      _id: this.post?._id as string,
      publisherImg: undefined
    };
    this.service.addToLikedList(post)
  }

  onDelete(id: string | undefined) {
    this.service.deletePost(id).subscribe(res => {
      console.log(res)
      this.service.getStoryList()
    })
  }

  onCommentClick() {
    const dialogRef = this.dialog.open(CommentListComponent, {data: this.post})
    dialogRef.afterClosed().subscribe(res => {
      console.log(res)
    })
  }

}
