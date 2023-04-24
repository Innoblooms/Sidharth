import { Component } from '@angular/core';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-grn-entry',
  templateUrl: './grn-entry.component.html',
  styleUrls: ['./grn-entry.component.scss']
})
export class GrnEntryComponent {

  GRN: any = ['purchase chalan', 'seller chalan'];
  Supplier: any = ['A & C Supplier', 'B & D Supplier'];
  Transporter: any = ['XYZ Transporter', 'ABC Transporter'];
  Gate: any = ['01', '02'];
  Data: any;

  todate = new Date();
  datepickerConfig: Partial<BsDatepickerConfig>

  constructor() {
    this.datepickerConfig = Object.assign({}, { showTodayButton: true }, { dateInputFormat: 'DD/MM/YYYY' });

  }


  onAdd() {

    alert('hello world');
  }
  onSave() {
    alert('hello world');
  }
  onDelete() {

    alert('hello world');
  }
  onedit() {

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
