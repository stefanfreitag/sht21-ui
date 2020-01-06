import { Routes } from '@angular/router';
import { SensorsComponent } from './sensors/sensors.component';
import { MeasurementsComponent } from './measurements/measurements.component';
import { AddSensorComponent } from './sensors/add-sensor/add-sensor.component';

export const appRoutes: Routes = [
	{ path: 'sensors/create', component: AddSensorComponent },
	{ path: 'sensors', component: SensorsComponent },
	{ path: 'measurements', component: MeasurementsComponent },
	{ path: '', component: SensorsComponent }
];
