import {
  AfterViewInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  QueryList,
  SimpleChanges,
  forwardRef
} from '@angular/core';

import { equals } from 'ramda';

import { MapboxService } from '../mapbox.service';
import { ControlComponent } from '../control';
import { LayerComponent } from './layer.component';
import { MarkerComponent } from './marker.component';
import { SourceComponent } from '../source';

@Component({
  selector: 'mb-map',
  template: `
    <div [attr.id]="id" style="position: relative; overflow: hidden; height: 100%;">
    </div>
  `
})
export class MapComponent implements AfterViewInit, OnChanges {

  id: string;
  map: mapboxgl.Map;

  @Input('mb-style') style = 'mapbox://styles/mapbox/light-v9';
  @Input() center: { lng: number, lat: number } = { lng: 0, lat: 0};
  @Input() zoom = 0;

  @Output() click: EventEmitter<any> = new EventEmitter();
  @Output() move: EventEmitter<any> = new EventEmitter();
  @Output() moveend: EventEmitter<any> = new EventEmitter();
  @Output() movestart: EventEmitter<any> = new EventEmitter();

  @ContentChildren(forwardRef(() => ControlComponent)) controls: QueryList<any>;
  @ContentChildren(LayerComponent) layers: QueryList<any>;
  @ContentChildren(MarkerComponent) markers: QueryList<any>;
  @ContentChildren(forwardRef(() => SourceComponent)) sources: QueryList<any>;

  constructor(private mapbox: MapboxService) {
    this.id = mapbox.nextId();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.map) {
      return;
    }

    if ('center' in changes || 'zoom' in changes) {
      if (this.extentHasChanged({ center: this.center, zoom: this.zoom }, { center: this.map.getCenter(), zoom: this.map.getZoom() })) {
        this.map.flyTo({
          center: this.center as mapboxgl.LngLat,
          zoom: this.zoom
        });
      }
    }
  }

  ngAfterViewInit() {
    this.map = this.mapbox.map({
      container: this.id,
      style: this.style,
      zoom: this.zoom,
      center: this.center
    });

    this.mapbox.bindToOutputs(this.map, [
      ['click', this.click],
      ['move', this.move],
      ['moveend', this.moveend],
      ['movestart', this.movestart]
    ]);

    this.setMapForChildren(this.controls);
    this.setMapForChildren(this.sources);
    this.setMapForChildren(this.layers);
    this.setMapForChildren(this.markers);
  }

  setMapForChildren(children) {
    if (!children) {
      return;
    }

    children.forEach((child) => child.mbSetMap(this.map));
  }

  private extentHasChanged(oldExtent, newExtent) {
    return !equals(oldExtent, newExtent);
  }

}
