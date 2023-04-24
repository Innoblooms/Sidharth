import { Component } from '@angular/core';

@Component({
  selector: 'app-gst-voucher',
  templateUrl: './gst-voucher.component.html',
  styleUrls: ['./gst-voucher.component.scss']
})
export class GstVoucherComponent {
  Data: any;
  Voucher: any = ['Arvind', 'Rekha'];
  Party: any = ['sales', 'purchase'];
  PartySupply: any = ['Arvind', 'Rekha'];
  RCM: any = ['Arvind', 'Rekha'];
  Agst: any = ['Arvind', 'Rekha'];
  Reason: any = ['Arvind', 'Rekha'];
  GST: any = ['Arvind', 'Rekha'];
  Rounding: any = ['sales', 'purchase'];


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
  Search() {

    alert('hello world');
  }
  onPrint() {

    window.print();
  }
}