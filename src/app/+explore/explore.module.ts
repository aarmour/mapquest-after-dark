import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreContainerComponent } from './explore-container/explore-container.component';

@NgModule({
  imports: [
    CommonModule,
    ExploreRoutingModule
  ],
  declarations: [ExploreContainerComponent]
})
export class ExploreModule { }
