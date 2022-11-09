import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePageRoutingModule } from './profile-page-routing.module';
import { ProfileTabComponent } from './profile-tab/profile-tab.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileComponent } from './profile-tab/profile/profile.component';
import { EditProfileComponent } from './profile-tab/edit-profile/edit-profile.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProfileTabComponent,
    ProfileComponent,
    EditProfileComponent,
  ],
  imports: [
    CommonModule,
    ProfilePageRoutingModule,
    MatTabsModule,
    SharedModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
  ]
})
export class ProfilePageModule { }
