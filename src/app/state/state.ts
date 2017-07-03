import { RouterState } from '@ngrx/router-store';

import { State as ExploreState } from './explore/state';
import { State as GeolocationState } from './geolocation/state';
import { State as UserState } from './user/state';

export interface State {
  explore: ExploreState;
  geolocation: GeolocationState;
  router: RouterState;
  user: UserState;
}
