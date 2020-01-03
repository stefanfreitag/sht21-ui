import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'


import {AppComponent} from './app.component'
import {SensorsComponent} from './sensors/sensors.component'
import {HttpClientModule} from '@angular/common/http'
import {SensorService} from './sensors/sensor.service'
import {AgGridModule} from '@ag-grid-community/angular'
import {MeasurementsComponent} from './measurements/measurements.component'
import {MeasurementService} from './measurements/measurement.service'
import {ChartModule} from 'angular-highcharts'
import {FormsModule} from '@angular/forms'
import {HeaderComponent} from './header/header.component'
import {RouterModule} from '@angular/router'
import {appRoutes} from './app.routes'
import {DateRendererComponent} from './measurements/DateRendererComponent'
import {CalendarModule, DropdownModule} from 'primeng/primeng'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


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
    BrowserAnimationsModule,
    FormsModule,
    CalendarModule,
    ChartModule,
    DropdownModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MeasurementService, SensorService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
