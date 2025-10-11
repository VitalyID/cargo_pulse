import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { UserConfigUi } from 'src/types/interfaces/userConfigUi';

const selectUserConfState =
  createFeatureSelector<UserConfigUi>('userConfKey');

export const selectUserConf = createSelector(
  selectUserConfState,
  (conf: UserConfigUi) => conf
);
