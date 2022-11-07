import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePageRoutingModule } from './profile-page-routing.module';
import { ProfileTabComponent } from './profile-tab/profile-tab.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileComponent } from './profile-tab/profile/profile.component';



@NgModule({
  declarations: [
    ProfileTabComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    ProfilePageRoutingModule,
    MatTabsModule,
    SharedModule,
    MatCardModule,
    MatIconModule,
  ]
})
export class ProfilePageModule { }
