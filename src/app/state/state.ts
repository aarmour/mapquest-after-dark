import { RouterState } from '@ngrx/router-store';

import { State as GeolocationState } from './geolocation/state';
import { State as UserState } from './user/state';

export interface State {
  geolocation: GeolocationState;
  router: RouterState;
  user: UserState;
}
