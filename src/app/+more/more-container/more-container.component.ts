import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { State } from '../../state/state';
import { LogoutAction } from '../../state/user/actions';

@Component({
  selector: 'mad-more-container',
  templateUrl: './more-container.component.html',
  styleUrls: ['./more-container.component.scss']
})
export class MoreContainerComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(new LogoutAction());
  }

}
