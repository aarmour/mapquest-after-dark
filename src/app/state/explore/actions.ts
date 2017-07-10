import { Action } from '@ngrx/store';

import { type } from '../util';
import { PoiDetails } from './state';

export const SET_MAP_EXTENT = type('[Explore] Set Map Extent');

export class SetMapExtentAction implements Action {
  type = SET_MAP_EXTENT;

  constructor(public payload: { center: mapboxgl.LngLat; zoom: number; }) { }
}

export const SHOW_POI_DETAILS = type('[Explore] Show Poi Details');

export class ShowPoiDetailsAction implements Action {
  type = SHOW_POI_DETAILS;

  constructor(public payload: PoiDetails) { }
}

export const HIDE_POI_DETAILS = type('[Explore] Hide Poi Details');

export class HidePoiDetailsAction implements Action {
  type = HIDE_POI_DETAILS;
}

export type Actions =
  | SetMapExtentAction
  | ShowPoiDetailsAction
  | HidePoiDetailsAction
  ;
