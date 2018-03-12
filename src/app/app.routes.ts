import {Routes} from '@angular/router';
import {SensorsComponent} from './sensors/sensors.component';
import {MeasurementsComponent} from './measurements/measurements.component';

export const appRoutes: Routes = [
  { path: 'sensors', component: SensorsComponent },
  { path: 'measurements',      component: MeasurementsComponent }

  // { path: '**', component: PageNotFoundComponent }
];
