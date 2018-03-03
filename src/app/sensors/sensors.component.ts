import {Component, OnInit} from '@angular/core';
import {SensorService} from './sensor.service';
import {ColDef} from 'ag-grid';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit {

  private gridApi;
  private gridColumnApi;

  rowData: Sensor[];
  columnDefs: ColDef[] = [
    {headerName: 'Sensor id', field: 'uuid'},
    {headerName: 'Description', field: 'description'},
    //{headerName: 'Measurements', cellRenderer: function(params) {
  //    return '<a href="http://localhost:8080/sensors"+ 3 +"/measurements/" target="_blank">params</a>';
    //   }}
  ];

  constructor(private service: SensorService) {
  }

  ngOnInit() {

  }


  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;


    this.service.getConfig()
      .subscribe(data => {
        console.log(data);
        params.api.setRowData(data);
      });

    params.api.sizeColumnsToFit();


  }

}
