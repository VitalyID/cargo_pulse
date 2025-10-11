import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserConfigUi } from 'src/types/interfaces/userConfigUi';

@Injectable({
  providedIn: 'root',
})
export class ApiConfigService {
  readonly #http = inject(HttpClient);
  mockUrl: string = 'assets/mock/userConf.json';

  getUserConf(): Observable<UserConfigUi> {
    return this.#http.get<UserConfigUi>(this.mockUrl);
  }
}
