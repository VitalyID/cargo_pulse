import { createAction, props } from '@ngrx/store';
import { UserTripConfig } from '../../../types/interfaces/userTripConfig';

export const loadUserTrips = createAction(
  '[UserTrips] Load User Trips'
);

export const loadUserTripsSuccess = createAction(
  '[UserTrips] User Trips Success',
  props<{ trips: UserTripConfig[] }>()
);

export const loadUserTripsFailure = createAction(
  '[UserTrips] User Trips Failure',
  props<{ error: any }>()
);
