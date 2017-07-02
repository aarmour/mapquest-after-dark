import { Component, OnInit } from '@angular/core';

import '@ngrx/core/add/operator/select';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import * as userActions from '../../state/user/actions';
import * as userSelectors from '../../state/user/selectors';
import { State } from '../../state/state';

@Component({
  selector: 'mad-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {

  isAuthenticated: Observable<boolean>

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.isAuthenticated = this.store.select(userSelectors.isAuthenticated);
  }

  login() {
    this.store.dispatch(new userActions.LoginAction());
  }

  logout() {
    this.store.dispatch(new userActions.LogoutAction());
  }

}
