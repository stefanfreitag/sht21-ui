import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MessageService } from 'primeng/api';

@Injectable()
export class SensorService {
	constructor(
		private http: HttpClient,
		private messageService: MessageService
	) {}

	getSensors(): Observable<Sensor[]> {
		return this.http.get<Sensor[]>(environment.endpoint + '/sensors/');
	}

	saveSensor(sensor: any) {
		this.http.post(environment.endpoint + '/sensors', sensor).subscribe(
			value => {
				console.log(value);
			},
			error => {
				this.messageService.add({
					severity: 'error',
					summary: 'Error registering sensor',
					detail: error
				});
			}
		);
	}
}
