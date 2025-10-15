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
      fuelCost: true,
      primeCost: true,
      taxCost: true,
      officeCost: true,
      otherCost: true,
      revenue: true,
      margin: true,
      marginality: true,
      counterpart_type: true,
      counterpart_name: true,
      counterpart_lastName: true,
      counterpart_surname: true,
      counterpart_tel: true,
      counterpart_title: true,
      counterpart_taxID: true,
      counterpart_kpp: true,
      counterpart_currentAcc: true,
      counterpart_bank: true,
      counterpart_correspondentAcc: true,
      counterpart_bik: true,
      counterpart_ogrn_ogrnip: true,
      counterpart_director: false,
      counterpart_directorInShort: false,
      counterpart_officialAddress_country: false,
      counterpart_officialAddress_region: false,
      counterpart_officialAddress_city: false,
      counterpart_officialAddress_street: false,
      counterpart_officialAddress_house: false,
      counterpart_officialAddress_office: false,
      counterpart_postAddress_country: false,
      counterpart_postAddress_region: false,
      counterpart_postAddress_city: false,
      counterpart_postAddress_street: false,
      counterpart_postAddress_house: false,
      counterpart_postAddress_office: false,
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
