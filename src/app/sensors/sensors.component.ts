import { Component, OnInit } from '@angular/core';
import {SensorService} from "./sensor.service";

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit {

  constructor(private service: SensorService) { }

  ngOnInit() {
    this.service.getConfig()
      .subscribe(data => console.log(data));

  }

}
