import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoreRoutingModule } from './more-routing.module';
import { MoreContainerComponent } from './more-container/more-container.component';

@NgModule({
  imports: [
    CommonModule,
    MoreRoutingModule
  ],
  declarations: [MoreContainerComponent]
})
export class MoreModule { }
