import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { TripState } from './user-trips.reducer';

const selectUserTipsState =
  createFeatureSelector<TripState>('userTripsKey');

export const selectUserTrips = createSelector(
  selectUserTipsState,
  (state: TripState) => state.trips
);
