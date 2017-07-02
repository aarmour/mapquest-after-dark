import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Effect, Actions, toPayload } from '@ngrx/effects';
import { go } from '@ngrx/router-store';
import { Action, Store } from '@ngrx/store';

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Observable';

import { State } from '../state';
import * as user from './actions';

@Injectable()
export class UserEffects {

  @Effect()
  login: Observable<Action> = this.actions
    .ofType(user.LOGIN)
    .switchMap(() => Observable.fromPromise(this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()))
      .map((response: { user: firebase.User }) => response.user)
      .map((firebaseUser: firebase.User) => {
        return new user.LoginSuccessAction(this.getPayload(firebaseUser));
      }));

  @Effect()
  logout: Observable<Action> = this.actions
    .ofType(user.LOGOUT)
    .switchMap(() => Observable.fromPromise(this.afAuth.auth.signOut())
      .map(() => new user.LogoutSuccessAction()));

  @Effect()
  logoutSuccess: Observable<Action> = this.actions
    .ofType(user.LOGOUT_SUCCESS)
    .map(() => go(['/']));

  constructor(private actions: Actions, private afAuth: AngularFireAuth, private store: Store<State>) {
    this.initAuth();
  }

  initAuth() {
    this.afAuth.authState
      .take(1)
      .subscribe((firebaseUser: firebase.User) => {
        this.store.dispatch(new user.AuthInitializedAction());
        if (firebaseUser) {
          this.store.dispatch(new user.LoginSuccessAction(this.getPayload(firebaseUser)));
        }
      });
  }

  getPayload(firebaseUser: firebase.User): user.UserInfo {
    return {
      displayName: firebaseUser.displayName,
      email: firebaseUser.email,
      emailVerified: firebaseUser.emailVerified,
      isAnonymous: firebaseUser.isAnonymous,
      phoneNumber: firebaseUser.phoneNumber,
      photoURL: firebaseUser.photoURL,
      uid: firebaseUser.uid
    };
  }

}
