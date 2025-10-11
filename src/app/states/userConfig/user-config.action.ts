import { createAction, props } from '@ngrx/store';
import {
  TableConf,
  UserConfigUi,
} from 'src/types/interfaces/userConfigUi';

export const loadTableConfig = createAction(
  '[Table Config] Load Table config'
);

export const loadTableConfigSuccess = createAction(
  '[Table Config] Load Table config SUCCESS',
  props<{ conf: UserConfigUi }>()
);

export const loadTableConfigFailure = createAction(
  '[Table Config] Load Table config FAILURE',
  props<{ error: any }>()
);
