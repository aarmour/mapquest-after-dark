import { createSelector } from 'reselect';

import { State } from '../state';
import { Coordinates, Position } from '../../core/geolocation.service';

import { State as GeolocationState } from './state';

export const geolocation = (state: State) => state.geolocation;

export const lastPosition = createSelector(geolocation, (state: GeolocationState) => state.lastPosition);

export const lastPositionLngLat =
  createSelector(lastPosition, (position: Position) =>
    position ? { lng: position.coords.longitude, lat: position.coords.latitude } : null);
