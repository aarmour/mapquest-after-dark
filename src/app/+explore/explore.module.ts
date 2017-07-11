import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ComponentsModule } from '../components/components.module';
import { MapboxModule } from '../mapbox/mapbox.module';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreContainerComponent } from './explore-container/explore-container.component';
import { LayerSelectionMenuComponent } from './layer-selection-menu/layer-selection-menu.component';
import { LayerDialogComponent } from './layer-dialog/layer-dialog.component';
import { MapMarkerElementFactoryService } from './map-marker-element-factory.service';
import { PoiDetailsSnackBarComponent } from './poi-details-snack-bar/poi-details-snack-bar.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ComponentsModule,
    MapboxModule,
    ExploreRoutingModule
  ],
  declarations: [
    ExploreContainerComponent,
    LayerDialogComponent,
    LayerSelectionMenuComponent,
    PoiDetailsSnackBarComponent,
  ],
  providers: [
    MapMarkerElementFactoryService
  ],
  entryComponents: [
    LayerDialogComponent,
    PoiDetailsSnackBarComponent
  ]
})
export class ExploreModule { }
