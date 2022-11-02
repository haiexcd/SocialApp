import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AutohideDirective } from './directives/autohide.directive';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AutohideDirective,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    AutohideDirective,
    NavbarComponent
  ]
})
export class SharedModule { }
