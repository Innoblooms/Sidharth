import { Component } from '@angular/core';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-sales-order',
  templateUrl: './sales-order.component.html',
  styleUrls: ['./sales-order.component.scss']
})
export class SalesOrderComponent {
  Data: any;
  Sale: any = ['Sales Order', 'Purchase Order']
  Delivery: any = ['Arvind', 'Rekha'];
  Item: any = ['sales', 'purchase'];
  Distributor: any = ['Arvind', 'Rekha'];
  Amendment: any = ['sales', 'purchase'];
  Party: any = ['Arvind', 'Rekha'];
  ToPlace: any = ['Kanpur', 'Delhi'];
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