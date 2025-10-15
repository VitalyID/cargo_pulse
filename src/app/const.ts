import { UserConfUiReducer } from './states/userConfig/user-config.reducer';
import { userTripsReducer } from './states/userTrips/user-trips.reducer';

export const MENU_ANIMATION_DELAY = 1000;
export const LIST_MAIN_TABLE = 31;

export const ListStores = {
  userTripsKey: userTripsReducer,
  userConfKey: UserConfUiReducer,
};

export const LIST_SWITCHERS = [
  'date',
  'mileage',
  'driver',
  'licensePlate',
  'actualWorkTime',
  'fuelConsumption',
  'fuelCost',
  'primeCost',
  'taxCost',
  'officeCost',
  'otherCost',
  'revenue',
  'margin',
  'marginality',
  'counterpart_type',
  'counterpart_name',
  'counterpart_lastName',
  'counterpart_surname',
  'counterpart_tel',
  'counterpart_title',
  'counterpart_taxID',
  'counterpart_kpp',
  'counterpart_currentAcc',
  'counterpart_bank',
  'counterpart_correspondentAcc',
  'counterpart_bik',
  'counterpart_ogrn_ogrnip',
  'counterpart_director',
  'counterpart_directorInShort',
  'counterpart_officialAddress_country',
  'counterpart_officialAddress_region',
  'counterpart_officialAddress_city',
  'counterpart_officialAddress_street',
  'counterpart_officialAddress_house',
  'counterpart_officialAddress_office',
  'counterpart_postAddress_country',
  'counterpart_postAddress_region',
  'counterpart_postAddress_city',
  'counterpart_postAddress_street',
  'counterpart_postAddress_house',
  'counterpart_postAddress_office',
] as const;
