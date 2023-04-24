import { Component } from '@angular/core';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  Data: any;
  Loading: any = ['Indent', '1'];
  LoadingtNo: any = ['arvind', 'santosh'];
  Shift: any = ['machine1', 'machine2'];
  Delivery: any = ['santosh', 'apna'];
  Consignee: any = ['machine1', 'machine'];
  Weightment: any = ['machine1', 'machine'];
  ToPlace: any = ['kanpur', 'delhi'];

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