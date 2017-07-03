import { EventEmitter, Injectable, Inject } from '@angular/core';

const createId = require('hat');
import { Map, Marker, NavigationControl } from './mapbox';

declare var mapboxgl;

@Injectable()
export class MapboxService {

  constructor(@Inject('MAPBOX_KEY') private accessToken: string) {
    mapboxgl.accessToken = accessToken;
  }

  bindToOutputs(map: any, outputs: Array<Array<any>>) {
    outputs.forEach(([name, output]) => {
      map.on(name, (e: any) => output.emit(e));
    });
  }

  nextId(): string {
    return createId();
  }

  map(options: Object): mapboxgl.Map {
    return new Map(options);
  }

  navigationControl(): mapboxgl.Control {
    return new NavigationControl();
  }

  marker(el: any, options?: any): mapboxgl.Marker {
    return new Marker(el, options);
  }

}
