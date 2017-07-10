const { equals, insert, mergeDeepRight, reject, uniq } = require('ramda');

import * as explore from './actions';
import { State } from './state';

const initialState: State = {
  entities: { },
  layers: [],
  layersEnabled: [],
  mapCenter: { lng: -98.58333, lat: 39.83333 } as mapboxgl.LngLat,
  mapZoom: 2,
  selectedEntity: null,
  showPoiDetails: false
};

export function reducer(state: State = initialState, action: explore.Actions): State {
  switch (action.type) {
    case explore.SET_MAP_EXTENT: {
      const { payload } = action as explore.SetMapExtentAction;
      return mergeDeepRight(state, { mapCenter: payload.center, mapZoom: payload.zoom });
    }

    case explore.ENABLE_LAYER: {
      const { payload } = action as explore.EnableLayerAction;
      return Object.assign({ }, state, { layersEnabled: uniq(insert(0, payload.name, state.layersEnabled)) });
    }

    case explore.DISABLE_LAYER: {
      const { payload } = action as explore.DisableLayerAction;
      return Object.assign(
        { },
        state,
        { layersEnabled: reject(equals(payload.name), state.layersEnabled) || [] }
      );
    }

    case explore.SHOW_POI_DETAILS: {
      const { payload } = action as explore.ShowPoiDetailsAction;
      return Object.assign(
        { },
        state,
        { entities: Object.assign({ }, state.entities, { [payload.id]: payload }) },
        { selectedEntity: payload.id, showPoiDetails: true }
      );
    }

    case explore.HIDE_POI_DETAILS: {
      return Object.assign({ }, state, { showPoiDetails: false });
    }

    default: {
      return state;
    }
  }
}
