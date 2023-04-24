import { Component } from '@angular/core';


@Component({
  selector: 'app-receipt-voucher',
  templateUrl: './receipt-voucher.component.html',
  styleUrls: ['./receipt-voucher.component.scss']
})
export class ReceiptVoucherComponent {
  Data: any;
  Voucher: any = ['Arvind', 'Rekha'];
  CostCenter: any = ['sales', 'purchase'];
  Debit: any = ['Arvind', 'Rekha'];



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