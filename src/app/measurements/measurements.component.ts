import {AfterContentInit, Component, OnInit} from '@angular/core';
import {MeasurementService} from './measurement.service';
import {Chart} from 'angular-highcharts';
import {ColDef} from 'ag-grid';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})
export class MeasurementsComponent implements OnInit{

  private gridApi;
  private gridColumnApi;

  private rowData: Measurement[] = [];


  private columnDefs: ColDef[] = [
    {headerName: 'Measured At', field: 'measuredAt'},
    {headerName: 'Value', field: 'value'},
    {headerName: 'Unit', field: 'unit'}
  ];

  private chart: Chart;


  constructor(private service: MeasurementService) {
    this.chart = new Chart({
      chart: {
        type: 'line'
      },
      xAxis: {
      visible: true,
        description: 'Test'
      }
    });

  }

  ngOnInit() {
    this.service.getMeasurements()
      .subscribe(data => {
        this.rowData = data;
      });
  }

  private refreshChart() {
    const values: any[] = [ ];
    for (const d of this.rowData) {
      values.push([d.measuredAt, d.value]);
    }
    this.chart.addSerie({name: 'Temperature', data: values, id: '1'});

  }

  onGridReady(params) {
    console.log('onGridReady');
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.setRowData(this.rowData);
    params.api.sizeColumnsToFit();
    this.refreshChart();
  }

}
