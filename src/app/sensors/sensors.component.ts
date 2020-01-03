import {Component, OnInit} from '@angular/core'
import {SensorService} from './sensor.service'
import {ColDef, Module} from '@ag-grid-community/all-modules'
import {AllCommunityModules} from '@ag-grid-community/all-modules'

import {ClientSideRowModelModule} from '@ag-grid-community/client-side-row-model'

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit {

  private gridApi
  private gridColumnApi

  modules: Module[] = [ClientSideRowModelModule]

  rowData: Sensor[]
  columnDefs: ColDef[] = [
    {headerName: 'UID', field: 'uuid', sortable: true},
    {headerName: 'Name', field: 'name', sortable: true},
    {headerName: 'Description', field: 'description', sortable: true}
  ]

  constructor(private service: SensorService) {
  }

  ngOnInit() {
    this.service.getSensors()
      .subscribe(data => {
      })

  }


  onGridReady(params) {
    this.gridApi = params.api
    this.gridColumnApi = params.columnApi


    this.service.getSensors()
      .subscribe(data => {
        params.api.setRowData(data)
      }, error => console.log(error))
    params.api.sizeColumnsToFit();
  }

}
