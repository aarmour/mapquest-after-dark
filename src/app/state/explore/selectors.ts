import { createSelector } from 'reselect';

import { State } from '../state';

import { State as ExploreState } from './state';

export const explore = (state: State) => state.explore;

export const mapCenter = createSelector(explore, (state: ExploreState) => state.mapCenter);

export const mapZoom = createSelector(explore, (state: ExploreState) => state.mapZoom);

export const mapExtent = createSelector(mapCenter, mapZoom, (center, zoom) => ({ center, zoom }));

export const showPoiDetails = createSelector(explore, (state: ExploreState) => state.showPoiDetails);

export const selectedEntityWithShowPoiDetails = createSelector(explore, (state: ExploreState) =>
  Object.assign({ }, { entity: state.entities[state.selectedEntity], showPoiDetails: state.showPoiDetails }));
