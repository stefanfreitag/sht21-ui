import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SensorsComponent } from './sensors/sensors.component';
import {HttpClientModule} from '@angular/common/http';
import {SensorService} from './sensors/sensor.service';
import {AgGridModule} from 'ag-grid-angular';
import { MeasurementsComponent } from './measurements/measurements.component';
import {MeasurementService} from './measurements/measurement.service';
import {ChartModule} from 'angular-highcharts';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from '@angular/router';
import {appRoutes} from './app.routes';
import {DateRendererComponent} from "./measurements/DateRendererComponent";


@NgModule({
  declarations: [
    AppComponent,
    DateRendererComponent,
    HeaderComponent,
    MeasurementsComponent,
    SensorsComponent
  ],
  entryComponents: [
DateRendererComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    ChartModule,

    HttpClientModule,
    AgGridModule.withComponents([ ]),
    RouterModule.forRoot(appRoutes, {enableTracing:false})
  ],
  providers: [MeasurementService, SensorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
