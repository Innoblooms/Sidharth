import { Component } from '@angular/core';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-indent',
  templateUrl: './indent.component.html',
  styleUrls: ['./indent.component.scss']
})
export class IndentComponent {

  Data: any;
  Indent: any = ['Indent', '1'];
  Requisition: any = [];
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

