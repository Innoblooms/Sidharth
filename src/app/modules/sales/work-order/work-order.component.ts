import { Component, ViewChild } from '@angular/core';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-work-order',
  templateUrl: './work-order.component.html',
  styleUrls: ['./work-order.component.scss']
})
export class WorkOrderComponent {
  Data: any;
  Indent: any = ['Indent', '1'];
  Shift: any = ['arvind', 'santosh'];
  Machine: any = ['machine1', 'machine2'];
  Item: any = ['reel', 'machine'];

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