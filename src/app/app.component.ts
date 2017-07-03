import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import * as geolocation from './state/geolocation/actions';
import { State } from './state/state';

@Component({
  selector: 'mad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new geolocation.InitializeAction());
  }

}
