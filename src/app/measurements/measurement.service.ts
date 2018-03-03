import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MeasurementService {

  configUrl = 'http://localhost:8080/sensors/e16f9f6c-eb43-4ef7-b7be-48a3653028c9/measurements/';

  constructor(private http: HttpClient) { }

  getMeasurements(): Observable<Measurement[]> {
    return this.http.get<Measurement[]>(this.configUrl);
  }

}
