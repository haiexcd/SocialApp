import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileTabComponent } from './profile-tab/profile-tab.component';

const routes: Routes = [
  { path: '', component: ProfileTabComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilePageRoutingModule { }
