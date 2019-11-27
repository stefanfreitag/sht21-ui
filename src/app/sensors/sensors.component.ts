import {Component, OnInit} from '@angular/core';
import {SensorService} from './sensor.service';
import {ColDef} from '@ag-grid-community/all-modules';

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
    {headerName: 'Identifier', field: 'uuid'},
    {headerName: 'Name', field: 'name'},
    {headerName: 'Description', field: 'description'}
  ];

  constructor(private service: SensorService) {
  }

  ngOnInit() {

  }


  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;


    this.service.getSensors()
      .subscribe(data => {
        console.log(data);
        params.api.setRowData(data);
      });

    params.api.sizeColumnsToFit();


  }

}
