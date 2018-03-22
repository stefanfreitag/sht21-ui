import {Component} from '@angular/core';
import {AgRendererComponent} from 'ag-grid-angular/main';

import * as format from 'date-fns/format';
import * as deLocale from 'date-fns/locale/de/index.js';


@Component({
  selector: 'app-datetime-cell',
  template: `{{formattedString}}`
})
export class DateRendererComponent implements AgRendererComponent {

  public formattedString: String;
  private params: any;

  agInit(params: any): void {
    this.params = params;

   this.formattedString = format(params.value, 'dddd, DD MMMM HH:mm:ss', {locale: deLocale});

  }

  refresh(params: any): boolean {
    this.params = params;
    return true;
  }


}

