import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';
import { MapboxModule } from '../mapbox/mapbox.module';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreContainerComponent } from './explore-container/explore-container.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    MapboxModule,
    ExploreRoutingModule
  ],
  declarations: [ExploreContainerComponent]
})
export class ExploreModule { }
