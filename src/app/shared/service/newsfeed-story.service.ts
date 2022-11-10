import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NewsfeedStory } from '../models/newsfeedStory';

@Injectable({
  providedIn: 'root'
})
export class NewsfeedStoryService {

  constructor(private http: HttpClient) { }

  storyList : NewsfeedStory[] = []
  storySubject = new BehaviorSubject<NewsfeedStory[]>([])
  likedList: NewsfeedStory[] = []
  likedListSubject = new BehaviorSubject<NewsfeedStory[]>([])


  getStoryList() {
    this.http.get<NewsfeedStory[]>('http://localhost:3000/news/').subscribe(values => {
      this.storyList = values
      this.storySubject.next(this.storyList.reverse())
    })
  }

  getPosts(): Observable<NewsfeedStory[]>{
    return this.http.get<NewsfeedStory[]>("http://localhost:3000/news/")
  }

  addToLikedList(likedPost: NewsfeedStory) {
    this.likedList.push(likedPost)
    this.likedListSubject.next(this.likedList)
  }

  deleteFromLikedList(postId: string | undefined) {
    this.likedList = this.likedList.filter(post => post._id !== postId)
    this.likedListSubject.next(this.likedList)
  }

  postStory(story: NewsfeedStory) : Observable<NewsfeedStory> {
    return this.http.post<NewsfeedStory>("http://localhost:3000/news/", story)
  }

  deletePost(id: string | undefined) {
    return this.http.delete(`http://localhost:3000/news/deletePost/${id}`)
  }
  
}
