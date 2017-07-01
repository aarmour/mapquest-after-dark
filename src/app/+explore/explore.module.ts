import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapboxModule } from '../mapbox/mapbox.module';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreContainerComponent } from './explore-container/explore-container.component';

@NgModule({
  imports: [
    CommonModule,
    MapboxModule,
    ExploreRoutingModule
  ],
  declarations: [ExploreContainerComponent]
})
export class ExploreModule { }
