import { Injectable } from '@angular/core';

import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import 'rxjs/add/operator/skip';
import { Observable } from 'rxjs/Observable';

import { GeolocationService, Position } from '../../core/geolocation.service';

import * as geolocation from './actions';

@Injectable()
export class GeolocationEffects {

  @Effect()
  watchPosition: Observable<Action> = this.actions
    .ofType(geolocation.INITIALIZE)
    .switchMap(() => this.geolocationService.watchPosition()
      .skip(1)
      .map((position: Position) => new geolocation.PositionSuccessAction(position))
      .catch((error: PositionError) => Observable.of(new geolocation.PositionErrorAction(error)))
    );

  constructor(private actions: Actions, private geolocationService: GeolocationService) { }

}
