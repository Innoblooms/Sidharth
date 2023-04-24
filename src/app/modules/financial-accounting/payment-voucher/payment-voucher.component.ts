import { Component } from '@angular/core';


@Component({
  selector: 'app-payment-voucher',
  templateUrl: './payment-voucher.component.html',
  styleUrls: ['./payment-voucher.component.scss']
})
export class PaymentVoucherComponent {
  Data: any;
  Voucher: any = ['Arvind', 'Rekha'];
  CostCenter: any = ['sales', 'purchase'];
  Credit: any = ['Arvind', 'Rekha'];


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