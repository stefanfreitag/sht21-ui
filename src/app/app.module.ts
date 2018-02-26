import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SensorsComponent } from './sensors/sensors.component';
import {HttpClientModule} from '@angular/common/http';
import {SensorService} from './sensors/sensor.service';


@NgModule({
  declarations: [
    AppComponent,
    SensorsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SensorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
