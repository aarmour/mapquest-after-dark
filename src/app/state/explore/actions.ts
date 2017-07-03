import { Action } from '@ngrx/store';

import { type } from '../util';

export const SET_MAP_EXTENT = type('[Explore] Set Map Extent');

export class SetMapExtentAction implements Action {
  type = SET_MAP_EXTENT;

  constructor(public payload: { center: mapboxgl.LngLat; zoom: number; }) { }
}

export type Actions =
  | SetMapExtentAction
  ;
