import { compose } from '@ngrx/core/compose';
import { routerReducer } from '@ngrx/router-store';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { createSelector } from 'reselect';

import { environment } from '../../environments/environment';

import { State } from './state';
import { reducer as exploreReducer } from './explore/reducer';
import { reducer as geolocationReducer } from './geolocation/reducer';
import { reducer as userReducer } from './user/reducer';

const reducers = {
  explore: exploreReducer,
  geolocation: geolocationReducer,
  router: routerReducer,
  user: userReducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function rootReducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}
