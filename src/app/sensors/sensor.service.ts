import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class SensorService {


  constructor(private http: HttpClient) {
  }

  getConfig(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(environment.endpoint + '/sensors/');
  }
}
