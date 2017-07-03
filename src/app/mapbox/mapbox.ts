// Workaround for https://github.com/angular/angular-cli/issues/5804

declare var mapboxgl;

const {
  LngLat,
  Map,
  Marker,
  NavigationControl
} = mapboxgl;

export {
  LngLat,
  Map,
  Marker,
  NavigationControl
};
