import { RouterState } from '@ngrx/router-store';

import { State as UserState } from './user/state';

export interface State {
  router: RouterState;
  user: UserState;
}
