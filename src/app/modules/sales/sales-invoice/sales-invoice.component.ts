import { Component} from '@angular/core';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-sales-invoice',
  templateUrl: './sales-invoice.component.html',
  styleUrls: ['./sales-invoice.component.scss']
})
export class SalesInvoiceComponent {
  Data:any;
  Return: any = ['Purchase Return', 'Purchase Type'];
  Supplier: any = ['Amit Suppliers', 'Purchase Type'];
  Ref: any = ['Amit Suppliers', 'Purchase Type'];
  Gate: any = ['01', '02'];
  Supplimentry: any = ['yes', 'no'];
  Transport: any = ['car', 'motor'];
  Mode: any = ['car', 'motor'];
  Item: any = ['car', 'motor'];
  EwayBill: any = ['car', 'motor'];
  ToPlace: any = ['kanpur', 'delhi'];
  Party: any = ['change is pos', 'dischange is pos'];
  Delivery: any = ['Amit Suppliers', 'Purchase Type'];
  Consignee: any = ['change is pos', 'dischange is pos'];
 
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