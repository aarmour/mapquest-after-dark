import { EventEmitter, Injectable, Inject } from '@angular/core';

const createId = require('hat');
const mapbox = require('mapbox-gl/dist/mapbox-gl');

@Injectable()
export class MapboxService {

  constructor(@Inject('MAPBOX_KEY') private accessToken: string) {
    mapbox.accessToken = accessToken;
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
    return new mapbox.Map(options);
  }

  navigationControl(): mapboxgl.Control {
    return new mapbox.NavigationControl();
  }

  marker(el: any, options?: any): mapboxgl.Marker {
    return new mapbox.Marker(el, options);
  }

}
