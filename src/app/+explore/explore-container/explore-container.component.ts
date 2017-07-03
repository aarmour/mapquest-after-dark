import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import * as selectors from '../../state/explore/selectors';
import { SetMapExtentAction } from '../../state/explore/actions';
import { State } from '../../state/state';

import { LayerDialogComponent } from '../layer-dialog/layer-dialog.component';

@Component({
  selector: 'mad-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss']
})
export class ExploreContainerComponent implements OnInit {

  mapCenter: Observable<mapboxgl.LngLat>;
  mapZoom: Observable<number>;

  constructor(private dialog: MdDialog, private store: Store<State>) { }

  ngOnInit() {
    this.mapCenter = this.store.select(selectors.mapCenter);
    this.mapZoom = this.store.select(selectors.mapZoom);
  }

  onMapMoveend($event) {
    const center = $event.target.getCenter();
    const zoom = $event.target.getZoom();
    this.store.dispatch(new SetMapExtentAction({ center, zoom }));
  }

  openLayersDialog() {
    this.dialog.open(LayerDialogComponent);
  }

}
