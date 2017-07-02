import { EffectsModule } from '@ngrx/effects';

import { UserEffects } from './user/effects';

export const effects = [
  EffectsModule.run(UserEffects)
];
