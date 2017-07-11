export enum Audience {
  pg13,
  r
}

export interface PoiDetails {
  id: string;
  name: string;
  description?: string;
  displayAddress?: string;
  thumbnailURL?: string;
}

export interface State {
  entities: { [id: string]: PoiDetails };
  layers: string[];
  layersEnabled: string[];
  mapCenter: mapboxgl.LngLat;
  mapZoom: number;
  selectedEntity: string | null;
  showPoiDetails: boolean;
}
