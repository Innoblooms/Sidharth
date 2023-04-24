import { Component } from '@angular/core';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-daily-production',
  templateUrl: './daily-production.component.html',
  styleUrls: ['./daily-production.component.scss']
})
export class DailyProductionComponent {
  Data: any;
  Producation: any = ['Indent', '1'];
  Chemist: any = ['arvind', 'santosh'];
  Shift: any = ['machine1', 'machine2'];
  Operator: any = ['santosh', 'apna'];
  Machine: any = ['machine1', 'machine'];
  ItemNature: any = ['machine1', 'machine'];

  todate = new Date();
  datepickerConfig: Partial<BsDatepickerConfig>
  constructor() {
    this.datepickerConfig = Object.assign({}, { showTodayButton: true }, { dateInputFormat: 'DD/MM/YYYY' });
  }



  onAdd() {

    alert('hello world');
  }
  onedit() {
    alert('hello world');
  }
  onDelete() {

    alert('hello world');
  }
  onSave() {

    alert('hello world');
  }

  
  onForward() {

    alert('hello world');
  }
  onBackward() {

    alert('hello world');
  }
  onPrint() {

    window.print();
  }

}
