import * as user from './actions';

export interface State {
  initialized: boolean;
  isAuthenticated: boolean;
  profile: user.UserInfo;
}
