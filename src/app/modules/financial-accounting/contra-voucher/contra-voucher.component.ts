import { Component } from '@angular/core';

@Component({
  selector: 'app-contra-voucher',
  templateUrl: './contra-voucher.component.html',
  styleUrls: ['./contra-voucher.component.scss']
})
export class ContraVoucherComponent {
  Data: any;
  Voucher: any = ['Arvind', 'Rekha'];
  CostCenter: any = ['sales', 'purchase'];
  Debit: any = ['Arvind', 'Rekha'];



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