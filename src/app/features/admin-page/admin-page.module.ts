import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { StorylistComponent } from './admin/storylist/storylist.component';
import { StoryComponent } from './admin/storylist/story/story.component';



@NgModule({
  declarations: [
    AdminComponent,
    StorylistComponent,
    StoryComponent,
  ],
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
  ]
})
export class AdminPageModule { }
