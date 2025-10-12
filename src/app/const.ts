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
  'counterparty',
] as const;
