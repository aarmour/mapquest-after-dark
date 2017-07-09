import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import * as userSelectors from '../../state/user/selectors';
import { UserInfo } from '../../state/user/actions';
import { State } from '../../state/state';

@Component({
  selector: 'mad-user-profile-container',
  templateUrl: './user-profile-container.component.html',
  styleUrls: ['./user-profile-container.component.scss']
})
export class UserProfileContainerComponent implements OnInit {

  userProfile: Observable<UserInfo>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.userProfile = this.store.select(userSelectors.profile);
  }

}
