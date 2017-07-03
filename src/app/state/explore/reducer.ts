const { mergeDeepRight } = require('ramda');

import * as explore from './actions';
import { State } from './state';

const initialState: State = {
  mapCenter: { lng: -98.58333, lat: 39.83333 } as mapboxgl.LngLat,
  mapZoom: 2
};

export function reducer(state: State = initialState, action: explore.Actions): State {
  switch (action.type) {
    case explore.SET_MAP_EXTENT: {
      const { payload } = action as explore.SetMapExtentAction;
      return mergeDeepRight(state, { mapCenter: payload.center, mapZoom: payload.zoom });
    }

    default: {
      return state;
    }
  }
}
