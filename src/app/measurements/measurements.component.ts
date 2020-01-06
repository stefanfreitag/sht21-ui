import { Component, OnInit } from '@angular/core';
import { MeasurementService } from './measurement.service';
import { Chart } from 'angular-highcharts';
import { ColDef, GridApi, Module } from '@ag-grid-community/all-modules';
import { DateRendererComponent } from './DateRendererComponent';
import subDays from 'date-fns/subDays';
import { SensorService } from '../sensors/sensor.service';

import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { SeriesOptionsType } from 'highcharts';

@Component({
	selector: 'app-measurements',
	templateUrl: './measurements.component.html',
	styleUrls: ['./measurements.component.css']
})
export class MeasurementsComponent implements OnInit {
	modules: Module[] = [ClientSideRowModelModule];

	sensors: Sensor[];
	selectedSensor: Sensor;

	private gridApi: GridApi;
	private gridColumnApi;

	/**
	 * Start date for reading sensor measurements from backend.
	 */
	startDate: Date;
	/**
	 * End date for reading sensor measurements from backend.
	 */
	endDate: Date;

	defaultDateOffset = 1;

	rowData: Measurement[] = [];

	columnDefs: ColDef[] = [
		{
			headerName: 'Measured At',
			field: 'measuredAt',
			cellRendererFramework: DateRendererComponent,
			sortable: true
		},
		{ headerName: 'Value', field: 'value' },
		{ headerName: 'Unit', field: 'unit' }
	];

	chart: Chart;

	constructor(
		private sensorService: SensorService,
		private measurementService: MeasurementService
	) {
		this.endDate = new Date();
		this.startDate = subDays(this.endDate, this.defaultDateOffset);
		this.chart = new Chart({
			chart: {
				type: 'line',
				zoomType: 'x'
			},
			xAxis: {
				type: 'datetime',
				visible: true,
				title: {
					text: 'Time'
				}
			},
			yAxis: {
				min: 0,
				type: 'linear',
				title: {
					text: 'Temperature'
				}
			}
		});
	}

	ngOnInit() {
		// 503bdf5d-fef6-4cfb-9602-bb2d30e4d836
		//    this.measurementService.getMeasurements('e16f9f6c-eb43-4ef7-b7be-48a3653028c9')
		//      .subscribe(data => {
		//        this.rowData = data;
		//      });
	}

	private refreshChart() {
		const values: any[] = [];
		for (const d of this.rowData) {
			values.push([d.measuredAt, d.value]);
		}
		while (this.chart.ref.series.length > 0) {
			this.chart.ref.series[0].remove(true);
		}
		this.chart.addSeries(
			{ name: 'Temperature', id: '1', type: 'line' },
			false,
			false
		);
		this.chart.ref.series[0].setData(values);
	}

	onGridReady(params) {
		this.gridApi = params.api;
		this.gridColumnApi = params.columnApi;
		params.api.setRowData(this.rowData);
		params.api.sizeColumnsToFit();
		this.refreshSensors();
		this.refreshChart();
	}

	btnLoadClicked() {
		this.measurementService
			.getMeasurementsForIntervall(
				this.selectedSensor.uuid,
				this.startDate.getTime(),
				this.endDate.getTime()
			)
			.subscribe(data => {
				this.rowData = data;
				this.refreshChart();
			});
	}

	private refreshSensors() {
		this.sensorService.getSensors().subscribe(data => {
			this.sensors = data;
			this.selectedSensor = this.sensors[0];
		});
	}
}
