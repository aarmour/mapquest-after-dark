import { Position } from '../../core/geolocation.service';

export interface State {
  lastPosition: Position | null;
  error: { message: string } | null;
}
