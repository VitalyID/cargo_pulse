import { UserConfigState } from './states/userConfig/user-config.reducer';
import { TripState } from './states/userTrips/user-trips.reducer';

export interface AppState {
  userTripsKey: TripState;
  userConfKey: UserConfigState;
}
