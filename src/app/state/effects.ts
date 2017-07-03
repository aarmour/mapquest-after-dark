import { EffectsModule } from '@ngrx/effects';

import { GeolocationEffects } from './geolocation/effects';
import { UserEffects } from './user/effects';

export const effects = [
  EffectsModule.run(GeolocationEffects),
  EffectsModule.run(UserEffects)
];
