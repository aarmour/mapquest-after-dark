import * as geolocation from './actions';
import { State } from './state';

const initialState: State = {
  lastPosition: null,
  error: null
};

export function reducer(state: State = initialState, action: geolocation.Actions): State {
  switch (action.type) {
    case geolocation.POSITION_SUCCESS: {
      return Object.assign({ }, state, { error: null, lastPosition: (action as geolocation.PositionSuccessAction).payload });
    }

    case geolocation.POSITION_ERROR: {
      return Object.assign({ }, state, { error: (action as geolocation.PositionErrorAction).payload });
    }

    default: {
      return state;
    }
  }
}
