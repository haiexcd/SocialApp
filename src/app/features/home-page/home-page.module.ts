import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostformComponent } from './home/postform/postform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { StoryListComponent } from './home/story-list/story-list.component';
import { StoryComponent } from './home/story-list/story/story.component';
import { LikeListComponent } from './home/like-list/like-list.component';
import { ListDialogComponent } from './home/like-list/list-dialog/list-dialog.component';



@NgModule({
  declarations: [
    HomeComponent,
    PostformComponent,
    StoryListComponent,
    StoryComponent,
    LikeListComponent,
    ListDialogComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    
  ]
})
export class HomePageModule { }
