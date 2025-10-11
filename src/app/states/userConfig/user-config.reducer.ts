import { UserConfigUi } from '../../../types/interfaces/userConfigUi';

import * as UserConfigTableActions from './user-config.action';

import { createReducer, on } from '@ngrx/store';

export interface UserConfigState {
  conf: UserConfigUi;
  isLoading: boolean;
  error: string | null;
}

export const initialState: UserConfigState = {
  conf: {
    table: {
      date: true,
      mileage: true,
      driver: true,
      licensePlate: true,
      actualWorkTime: true,
      fuelConsumption: true,
      fuelCost: false,
      primeCost: true,
      taxCost: false,
      officeCost: false,
      otherCost: false,
      revenue: true,
      margin: true,
      marginality: false,
      counterparty: true,
    },
  },
  isLoading: false,
  error: null,
};

export const UserConfUiReducer = createReducer(
  initialState,
  on(UserConfigTableActions.loadTableConfig, state => ({
    ...state,
    isLoading: true,
  })),
  on(
    UserConfigTableActions.loadTableConfigSuccess,
    (state, { conf }) => ({
      ...state,
      table: conf.table,
      isLoading: false,
      error: null,
    })
  ),

  on(
    UserConfigTableActions.loadTableConfigFailure,
    (state, { error }) => ({
      ...state,
      isLoading: false,
      error: error,
    })
  )
);
