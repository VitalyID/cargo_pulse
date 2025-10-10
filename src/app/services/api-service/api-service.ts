import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserTripConfig } from 'src/types/interfaces/userTripConfig';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  readonly #http = inject(HttpClient);

  readonly #url = 'assets/mock/user_trips.json';
  getAllTrip(): Observable<UserTripConfig[]> {
    return this.#http.get<UserTripConfig[]>(this.#url);
  }

  getAllTrips() {
    console.log(1111);

    const data = this.getAllTrip();
    console.log('данные с сервера:', data);
    return data;
  }
}
