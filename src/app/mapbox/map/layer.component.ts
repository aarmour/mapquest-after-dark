import { Component, Input, OnChanges } from '@angular/core';

import { SetMap } from '../metadata/set-map';
import { MapboxService } from '../mapbox.service';

@Component({
  selector: 'mb-layer',
  template: ''
})
export class LayerComponent implements OnChanges, SetMap {

  private map: mapboxgl.Map;

  @Input() filter: string[];
  @Input() id: string;
  @Input() layout: Object = { };
  @Input() paint: Object = { };
  @Input() source: string;
  @Input() type: ('symbol') = 'symbol';

  constructor(private mapbox: MapboxService) { }

  ngOnChanges() {
    if (this.filter && this.map) {
      this.map.setFilter(this.id, this.filter);
    }
  }

  mbSetMap(map: mapboxgl.Map) {
    this.map = map;
    if (this.map.loaded()) {
      this.addLayer();
    } else {
      this.map.on('load', () => this.addLayer());
    }
  }

  private addLayer() {
    this.map.addLayer({
      id: this.id,
      type: this.type,
      source: this.source,
      layout: this.layout,
      paint: this.paint
    });
  }

}
