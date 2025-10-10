import { createReducer, on } from '@ngrx/store';
import { UserTripConfig } from 'src/types/interfaces/userTripConfig';
import * as UserTripsActions from './user-trips.action';

export interface TripState {
  trips: UserTripConfig[];
  isLoading: boolean;
  error: string | null;
}

export const initialState: TripState = {
  trips: [],
  isLoading: false,
  error: null,
};

export const userTripsReducer = createReducer(
  initialState,
  on(UserTripsActions.loadUserTrips, state => ({
    ...state,
    isLoading: true,
  })),
  on(
    UserTripsActions.loadUserTripsSuccess,
    (state, { trips }) => ({
      ...state,
      trips,
      isLoading: false,
      error: null,
    })
  ),
  on(
    UserTripsActions.loadUserTripsFailure,
    (state, { error }) => ({
      ...state,
      isLoading: false,
      error,
    })
  )
);
