import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import * as mapSelectors from '../../state/geolocation/selectors';
import { State } from '../../state/state';

@Component({
  selector: 'mad-app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.scss']
})
export class AppToolbarComponent implements OnInit {

  findMeLink;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.findMeLink = this.store.select(mapSelectors.lastPositionLngLat)
      .filter((position: mapboxgl.LngLat) => position !== null)
      .map((position: mapboxgl.LngLat) => ['/explore', { x: position.lng, y: position.lat, z: 14 }]);
  }

}
