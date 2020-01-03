import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {environment} from '../../environments/environment'

@Injectable()
export class MeasurementService {

  constructor(private http: HttpClient) {
  }

  getMeasurements(sensorUuid: String): Observable<Measurement[]> {
    return this.http.get<Measurement[]>(environment.endpoint + '/sensors/' + sensorUuid + '/measurements');
  }

  getMeasurementsForIntervall(sensorUuid: String, startDate: number, endDate: number): Observable<Measurement[]> {
    console.log('Start Date' + startDate);
    //return this.http.get<Measurement[]>(environment.endpoint + '/sensors/' + sensorUuid + '/measurements' + '/?from=' + startDate + '&to=' + endDate);
    return this.http.get<Measurement[]>(environment.endpoint + '/sensors/' + sensorUuid + '/measurements' + '/?from=' + startDate) ;
  }


}
