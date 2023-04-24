import { Component } from '@angular/core';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-item-consumption',
  templateUrl: './item-consumption.component.html',
  styleUrls: ['./item-consumption.component.scss']
})
export class ItemConsumptionComponent {
  Data: any;
  Consumption: any = ['Indent', '1'];
  Godown: any = ['Indent', '1'];
  Issue: any = ['Indent', '1'];
  Requistion: any = ['machine1', 'machine2'];

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