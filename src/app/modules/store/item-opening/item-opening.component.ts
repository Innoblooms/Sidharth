import { Component } from '@angular/core';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-item-opening',
  templateUrl: './item-opening.component.html',
  styleUrls: ['./item-opening.component.scss']
})
export class ItemOpeningComponent {
  Data: any;
  Opening: any = ['Indent', '1'];
  Recived: any = ['arvind', 'santosh'];
  Godown: any = ['machine1', 'machine2'];


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
