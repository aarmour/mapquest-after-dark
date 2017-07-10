import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MdDialog, MdSnackBar, MdSnackBarRef } from '@angular/material';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Store } from '@ngrx/store';
import { go } from '@ngrx/router-store';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import * as exploreSelectors from '../../state/explore/selectors';
import * as geolocationSelectors from '../../state/geolocation/selectors';
import { SetMapExtentAction } from '../../state/explore/actions';
import { State } from '../../state/state';

import { LayerDialogComponent } from '../layer-dialog/layer-dialog.component';
import { MapMarkerElementFactoryService } from '../map-marker-element-factory.service';
import { PoiDetailsSnackBarComponent } from '../poi-details-snack-bar/poi-details-snack-bar.component';

@Component({
  selector: 'mad-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss']
})
export class ExploreContainerComponent implements OnDestroy, OnInit {

  @ViewChild('map') mapEl: ElementRef;

  geolocationMarker: ElementRef;
  geolocationPositionLngLat: Observable<mapboxgl.LngLat>;
  mapCenter: Observable<mapboxgl.LngLat>;
  mapZoom: Observable<number>;
  snackBarRef: MdSnackBarRef<any>;

  routeParamsSubscription: Subscription;
  showPoiDetailsSubscription: Subscription;

  constructor(
    private dialog: MdDialog,
    private snackBar: MdSnackBar,
    private markerElementFactory: MapMarkerElementFactoryService,
    private route: ActivatedRoute,
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.geolocationMarker = this.markerElementFactory.createGeolocationMarker();

    this.geolocationPositionLngLat = this.store.select(geolocationSelectors.lastPositionLngLat)
      .filter((lngLat: mapboxgl.LngLat) => lngLat !== null);
    this.mapCenter = this.store.select(exploreSelectors.mapCenter);
    this.mapZoom = this.store.select(exploreSelectors.mapZoom);

    this.showPoiDetailsSubscription = this.store.select(exploreSelectors.selectedEntityWithShowPoiDetails)
      .subscribe(state => {
        if (this.snackBarRef) {
          this.snackBarRef.dismiss();
        }

        if (state.showPoiDetails && state.entity) {
          this.snackBarRef = this.snackBar.openFromComponent(PoiDetailsSnackBarComponent, { extraClasses: ['mad-explore-snack-bar'] });
          this.snackBarRef.instance.snackBarRef = this.snackBarRef;
          this.snackBarRef.instance.name = state.entity.name;
        }
      });

    this.routeParamsSubscription = this.route.paramMap
      .filter((params: ParamMap) => params.get('x') !== null && params.get('y') !== null && params.get('z') !== null)
      .map((params: ParamMap) =>
        ({
          center: { lng: parseFloat(params.get('x')), lat: parseFloat(params.get('y')) } as mapboxgl.LngLat,
          zoom: parseFloat(params.get('z'))
        }))
      .subscribe((extent) => this.store.dispatch(new SetMapExtentAction(extent)));
  }

  ngOnDestroy() {
    if (this.snackBarRef) {
      this.snackBarRef.dismiss();
    }

    this.routeParamsSubscription.unsubscribe();
    this.showPoiDetailsSubscription.unsubscribe();
  }

  onMapMoveend($event) {
    const center = $event.target.getCenter();
    const zoom = $event.target.getZoom();
    this.store.dispatch(go(['/explore', { x: center.lng, y: center.lat, z: zoom }]));
  }

  openLayersDialog() {
    this.dialog.open(LayerDialogComponent);
  }

}
