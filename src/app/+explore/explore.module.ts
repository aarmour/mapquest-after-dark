import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';
import { MapboxModule } from '../mapbox/mapbox.module';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreContainerComponent } from './explore-container/explore-container.component';
import { LayerSelectionMenuComponent } from './layer-selection-menu/layer-selection-menu.component';
import { LayerDialogComponent } from './layer-dialog/layer-dialog.component';
import { MapMarkerElementFactoryService } from './map-marker-element-factory.service';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    MapboxModule,
    ExploreRoutingModule
  ],
  declarations: [
    ExploreContainerComponent,
    LayerDialogComponent,
    LayerSelectionMenuComponent,
  ],
  providers: [
    MapMarkerElementFactoryService
  ],
  entryComponents: [
    LayerDialogComponent
  ]
})
export class ExploreModule { }
