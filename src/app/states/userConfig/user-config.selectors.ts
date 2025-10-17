import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { UserConfigUi } from 'src/types/interfaces/userConfigUi';
import { UserConfigState } from './user-config.reducer';

const selectUserConfState =
  createFeatureSelector<UserConfigState>('userConfKey');

export const selectUserConf = createSelector(
  selectUserConfState,
  (state: UserConfigState): UserConfigUi => state.conf
);
