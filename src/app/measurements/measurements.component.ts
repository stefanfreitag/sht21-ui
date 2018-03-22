import {Component, OnInit} from '@angular/core';
import {MeasurementService} from './measurement.service';
import {Chart} from 'angular-highcharts';
import {ColDef} from 'ag-grid';
import {DateRendererComponent} from './DateRendererComponent';
import * as subDays from 'date-fns/sub_days';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})
export class MeasurementsComponent implements OnInit {


  private sensorId: String = 'e16f9f6c-eb43-4ef7-b7be-48a3653028c9';
  private gridApi;
  private gridColumnApi;

  startDate: number;
  endDate: number;

  private rowData: Measurement[] = [];


  private columnDefs: ColDef[] = [
    {headerName: 'Measured At', field: 'measuredAt', cellRendererFramework: DateRendererComponent},
    {headerName: 'Value', field: 'value'},
    {headerName: 'Unit', field: 'unit'}
  ];

  private chart: Chart;

  constructor(private service: MeasurementService) {
    this.endDate = new Date().getTime();
    this.startDate = subDays(this.endDate, 1).getTime();
    this.chart = new Chart({
      chart: {
        type: 'line'
      },
      xAxis: {
        type: 'datetime',
        visible: true,
        title: {
          text: 'Time'
        }
      },
      yAxis: {
        type : 'linear',
        title: {
          text: 'Temperature'
        }
      }
    });

  }


  ngOnInit() {
    //503bdf5d-fef6-4cfb-9602-bb2d30e4d836
    this.service.getMeasurements('e16f9f6c-eb43-4ef7-b7be-48a3653028c9')
      .subscribe(data => {
        this.rowData = data;
      });
  }

  private refreshChart() {
    const values: any[] = [];
    for (const d of this.rowData) {
      values.push([d.measuredAt, d.value]);
    }
    while(this.chart.ref.series.length > 0)
      this.chart.ref.series[0].remove(true);
    this.chart.addSerie({name: 'Temperature', id: '1'});
    this.chart.ref.series[0].setData(values);

  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.setRowData(this.rowData);
    params.api.sizeColumnsToFit();
    this.refreshChart();
  }

  btnFilterClicked() {
    console.log(this.startDate);
    console.log(this.endDate)
    this.service.getMeasurementsForIntervall(this.sensorId, this.startDate, this.endDate)
      .subscribe(data => {
        this.rowData = data;
        console.log('Finished fetching of ' + data.length + ' elements.');
        this.refreshChart();
      });
  }
}
