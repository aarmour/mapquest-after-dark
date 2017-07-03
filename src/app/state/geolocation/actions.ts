import { Action } from '@ngrx/store';

import { Coordinates, Position, PositionError } from '../../core/geolocation.service';

import { type } from '../util';

export const INITIALIZE = type('[Geolocation] Initialize');
export const POSITION_SUCCESS = type('[Geolocation] Position Success');
export const POSITION_ERROR = type('[Geolocation] Position Error');

export class InitializeAction implements Action {
  type = INITIALIZE;
}

export class PositionSuccessAction implements Action {
  type = POSITION_SUCCESS;

  public payload: Position;

  constructor(private position: Position) {
    this.payload = this.normalizePosition(position);
  }

  private normalizePosition(position: Position): Position {
    // The native Position instance has custom getters that do not
    // get copied when using Object.assign. This converts it to a POJO.
    return {
      coords: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        altitude: position.coords.altitude,
        accuracy: position.coords.altitudeAccuracy,
        heading: position.coords.heading,
        speed: position.coords.speed
      } as Coordinates,
      timestamp: position.timestamp
    };
  }
}

export class PositionErrorAction implements Action {
  type = POSITION_ERROR;

  public payload: PositionError;

  constructor(private error: PositionError) {
    this.payload = this.normalizeError(error);
  }

  private normalizeError(error: PositionError): PositionError {
    // The native PositionError instance has custom getters that do not
    // get copied when using Object.assign. This converts it to a POJO.
    return {
      code: error.code,
      message: error.message
    };
  }
}

export type Actions =
  | InitializeAction
  | PositionSuccessAction
  | PositionErrorAction
  ;
