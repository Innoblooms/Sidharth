import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-requisition',
  templateUrl: './requisition.component.html',
  styleUrls: ['./requisition.component.scss']
})
export class RequisitionComponent {
  Data: any;
  Requisition: any = ['Indent', '1'];
  Department: any = ['Indent', '1'];
  Priority: any = ['Indent', '1'];
  DepartmentTo: any = ['arvind', 'santosh'];
  RequisitionBy: any = ['machine1', 'machine2'];
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