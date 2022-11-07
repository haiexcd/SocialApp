import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Comment, NewsfeedStory } from 'src/app/shared/models/newsfeedStory';
import { PostCommentService } from 'src/app/shared/service/comment.service';
import { PostLoginService } from 'src/app/shared/service/post-login.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.sass']
})
export class CommentListComponent implements OnInit {

  comments: Comment[] | undefined = this.data.comment
  filteredComments: Comment[] | undefined = this.comments

  pageSize: number = 3;
  pageIndex: number = 1;
  
  contentText: FormControl<string> = new FormControl()

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: NewsfeedStory,
    private service: PostCommentService,
    private tokenService: PostLoginService,
  ) { }

  ngOnInit(): void {
  }

  savePage(event: PageEvent){
    this.pageIndex = event.pageIndex
    this.pageSize = event.pageSize
    this.handlePage(this.pageIndex, this.pageSize)
  }

  handlePage(index: number, size: number) {
    this.filteredComments = this.comments?.slice(index*size, index*size + size)
  }

  onPostComment() {
    const userToken = this.tokenService.getToken()
    const userName = userToken?.userName
    const comment : Comment = {
      publisherName: userName,
      content: {text: this.contentText.value}
    }
    this.service.postComment(this.data._id, comment).subscribe(res => {
      this.data.comment?.push(res)
    })
    this.contentText.reset()
  }

  onDeleteComment(id: string | undefined){
    console.log(this.data._id)
    console.log(id)
    this.service.deleteComment(this.data._id, id).subscribe(
      res => {
        console.log(res)
        if(this.data.comment){
          const temp : Comment[]= [...this.data.comment]
          this.data.comment?.splice(0)
          this.data.comment?.push(...temp.filter(
            comment => 
              comment._id !== id
          ))
        }
        this.handlePage(this.pageIndex, this.pageSize)
      }
    )
  }

}
