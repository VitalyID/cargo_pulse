import { inject, Injectable } from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { ApiConfigService } from 'src/app/services/userConf/user-conf-data';
import { UserConfigUi } from '../../../types/interfaces/userConfigUi';
import * as UserConfActions from './user-config.action';

Injectable();
export class UserConfigUiEffects {
  readonly #actions$ = inject(Actions);
  readonly #serverConf = inject(ApiConfigService);

  getConf$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(UserConfActions.loadTableConfig),
      exhaustMap(() =>
        this.#serverConf.getUserConf().pipe(
          map((conf: UserConfigUi) =>
            UserConfActions.loadTableConfigSuccess({
              conf,
            })
          ),
          catchError(error =>
            of(
              UserConfActions.loadTableConfigFailure({
                error,
              })
            )
          )
        )
      )
    );
  });
}
