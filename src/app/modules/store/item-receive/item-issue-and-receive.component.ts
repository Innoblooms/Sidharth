import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-item-issue-and-receive',
  templateUrl: './item-issue-and-receive.component.html',
  styleUrls: ['./item-issue-and-receive.component.scss']
})
export class ItemIssueAndReceiveComponent {
  Data: any;
  Recive: any = ['Indent', '1'];
  Recived: any = ['arvind', 'santosh'];
  Machine: any = ['machine1', 'machine2'];
  Item: any = ['reel', 'machine'];
  todate = new Date();
  datepickerConfig: Partial<BsDatepickerConfig>

  constructor(private _formBuilder: FormBuilder) {
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
