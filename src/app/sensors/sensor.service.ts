import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SensorService {

  constructor(private http: HttpClient) { }

  configUrl = 'http://192.168.178.59:8080/sensors/';

  getConfig() : Observable<Sensor[]>{
    return this.http.get<Sensor[]>(this.configUrl);
  }
}
