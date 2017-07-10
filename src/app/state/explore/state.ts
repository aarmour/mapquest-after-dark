export interface PoiDetails {
  id: string;
  name: string;
  description?: string;
  displayAddress?: string;
  thumbnailURL?: string;
}

export interface State {
  entities: { [id: string]: PoiDetails };
  mapCenter: mapboxgl.LngLat;
  mapZoom: number;
  selectedEntity: string | null;
  showPoiDetails: boolean;
}
