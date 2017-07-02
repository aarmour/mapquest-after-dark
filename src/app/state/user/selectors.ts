import { createSelector } from 'reselect';

import { State } from '../state';
import { State as UserState } from './state';

export const user = (state: State) => state.user;

export const initialized = createSelector(user, (state: UserState) => state.initialized);

export const isAuthenticated = createSelector(user, (state: UserState) => state.isAuthenticated);

export const profile = createSelector(user, (state: UserState) => state.profile);
