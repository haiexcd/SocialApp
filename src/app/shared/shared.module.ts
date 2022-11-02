import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AutohideDirective } from './directives/autohide.directive';


@NgModule({
  declarations: [
    AutohideDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    AutohideDirective,
  ]
})
export class SharedModule { }
