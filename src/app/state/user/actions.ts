import { Action } from '@ngrx/store';

import * as firebase from 'firebase/app';

import { type } from '../util';

export interface UserInfo {
  displayName: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  phoneNumber: string;
  photoURL: string;
  uid: string;
}

export const LOGIN = type('[User] Login');
export const LOGIN_SUCCESS = type('[User] Login Success');
export const LOGOUT = type('[User] Logout');
export const LOGOUT_SUCCESS = type('[User] Logout Success');

export class LoginAction implements Action {
  type = LOGIN;
}

export class LoginSuccessAction implements Action {
  type = LOGIN_SUCCESS;

  constructor(public payload: UserInfo) { }
}

export class LogoutAction implements Action {
  type = LOGOUT;
}

export class LogoutSuccessAction implements Action {
  type = LOGOUT_SUCCESS;
}

export type Actions =
  | LoginAction
  | LoginSuccessAction
  | LogoutAction
  | LogoutSuccessAction
  ;
