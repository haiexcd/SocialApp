import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/newsfeedStory';

@Injectable({
  providedIn: 'root'
})
export class PostCommentService {

  constructor(private http: HttpClient) { }

  postComment(id: string | undefined, body: Comment) : Observable<Comment> {
    return this.http.patch<Comment>(`http://localhost:3000/news/addComment/${id}`, body)
  }

  deleteComment(id: string | undefined, commentId: string | undefined) {
    return this.http.delete("http://localhost:3000/news/deleteComment/" + id + '/' + commentId)
  }
}
