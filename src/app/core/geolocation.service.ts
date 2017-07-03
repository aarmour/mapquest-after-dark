import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

export interface Coordinates {
  latitude: number;
  longitude: number;
  altitude: number;
  accuracy: number;
  altitudeAccuracy: number;
  heading: number;
  speed: number;
}

export interface Position {
  coords: Coordinates;
  timestamp: number;
}

export enum PositionErrorCode {
  PermissionDenied = 1,
  PositionUnavailable = 2,
  Timeout = 3
}

export interface PositionError {
  code: PositionErrorCode;
  message: string;
}

export interface PositionOptions {
  enableHighAccuracy?: boolean;
  timeout?: number;
  maximumAge?: number;
}

@Injectable()
export class GeolocationService {

  constructor() { }

  get isSupported(): boolean {
    return 'geolocation' in navigator;
  }

  clearWatch(id: number) {
    navigator.geolocation.clearWatch(id);
  }

  watchPosition(options?: PositionOptions): Observable<Position | number> {
    return Observable.create((observer) => {

      function handleSuccess(position: Position) {
        observer.next(position);
      }

      function handleError(error: PositionError) {
        observer.error(error);
      }

      const id = navigator.geolocation.watchPosition(handleSuccess, handleError, options);
      observer.next(id);
    });
  }

}
