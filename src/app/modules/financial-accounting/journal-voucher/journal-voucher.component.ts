import { Component } from '@angular/core';

@Component({
  selector: 'app-journal-voucher',
  templateUrl: './journal-voucher.component.html',
  styleUrls: ['./journal-voucher.component.scss']
})
export class JournalVoucherComponent {
  Data: any;
  Voucher: any = ['Arvind', 'Rekha'];
  CostCenter: any = ['sales', 'purchase'];
  Debit: any = ['Arvind', 'Rekha'];



  onAdd() {

    alert('hello world');
  }
  leggi() {
    alert('hello world');
  }
  onDelete() {

    alert('hello world');
  }
  onWatch() {

    alert('hello world');
  }

  onCancle() {

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