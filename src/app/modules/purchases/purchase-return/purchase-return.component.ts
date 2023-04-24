import { Component } from '@angular/core';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-purchase-return',
  templateUrl: './purchase-return.component.html',
  styleUrls: ['./purchase-return.component.scss']
})
export class PurchaseReturnComponent {
  Data:any;
  Return:any =['Purchase Return', 'Purchase Type'];
  Supplier:any =['Amit Suppliers', 'Purchase Type'];
  Gate:any =['01', '02'];
  EWay:any =['yes','no'];
  Transport:any =['car','motor'];
  Transporter:any=['Amit Suppliers', 'Purchase Type'];
  Reason:any=['change is pos','dischange is pos'];
  
  todate = new Date();
  datepickerConfig: Partial<BsDatepickerConfig>

  constructor() {
    this.datepickerConfig = Object.assign({}, { showTodayButton: true }, { dateInputFormat: 'DD/MM/YYYY' });

  }
  
  terms(){
    alert('hello world');
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
  