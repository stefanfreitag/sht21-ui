import { Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators
} from '@angular/forms';
import { SensorService } from '../sensor.service';
import * as uuid from 'uuid';

@Component({
	selector: 'app-add-sensor',
	templateUrl: './add-sensor.component.html',
	styleUrls: ['./add-sensor.component.css']
})
export class AddSensorComponent {
	private createSensorForm: FormGroup;

	constructor(
		private service: SensorService,
		private formBuilder: FormBuilder
	) {
		this.createSensorForm = this.createFormGroup(formBuilder);
	}

	saveSensor() {
		this.service.saveSensor({
			name: this.createSensorForm.controls['name'].value,
			description: this.createSensorForm.controls['description'].value,
			uuid: uuid.v4()
		});
	}

	createFormGroup(formBuilder: FormBuilder) {
		return formBuilder.group({
			name: ['Test', Validators.required],
			description: 'Description'
		});
	}
}
