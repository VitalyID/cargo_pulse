import { inject, Injectable } from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { ApiService } from 'src/app/services/api-service/api-service';
import { UserTripConfig } from 'src/types/interfaces/userTripConfig';
import * as UserTripsActions from './user-trips.action';

@Injectable()
export class UserTripsEffects {
  readonly #actions$ = inject(Actions);
  readonly #serverApi = inject(ApiService);

  getTrips$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(UserTripsActions.loadUserTrips),
      exhaustMap(() =>
        this.#serverApi.getAllTrips().pipe(
          map((trips: UserTripConfig[]) =>
            UserTripsActions.loadUserTripsSuccess({
              trips,
            })
          ),
          catchError(error =>
            of(
              UserTripsActions.loadUserTripsFailure({
                error,
              })
            )
          )
        )
      )
    );
  });
}
