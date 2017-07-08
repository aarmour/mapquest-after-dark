import { Component, OnDestroy, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Store } from '@ngrx/store';
import { go } from '@ngrx/router-store';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import * as selectors from '../../state/explore/selectors';
import { SetMapExtentAction } from '../../state/explore/actions';
import { State } from '../../state/state';

import { LayerDialogComponent } from '../layer-dialog/layer-dialog.component';

@Component({
  selector: 'mad-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss']
})
export class ExploreContainerComponent implements OnDestroy, OnInit {

  mapCenter: Observable<mapboxgl.LngLat>;
  mapZoom: Observable<number>;
  routeParamsSubscription: Subscription;

  constructor(private route: ActivatedRoute, private dialog: MdDialog, private store: Store<State>) { }

  ngOnInit() {
    this.mapCenter = this.store.select(selectors.mapCenter);
    this.mapZoom = this.store.select(selectors.mapZoom);
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
    this.routeParamsSubscription.unsubscribe();
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
