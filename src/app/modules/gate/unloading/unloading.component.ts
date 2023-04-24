import { Component } from '@angular/core';
import {FormGroup } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-unloading',
  templateUrl: './unloading.component.html',
  styleUrls: ['./unloading.component.scss']
})
export class UnloadingComponent {
  
  formGroup: FormGroup | any;
  Data: any;
  
  Unloading: any = ['Unloading Type', 'Loading Type'];
  Weighment: any = ['1', '2'];
  
  todate = new Date();
  datepickerConfig: Partial<BsDatepickerConfig>
 
  constructor(){
    this.datepickerConfig = Object.assign({}, { showTodayButton: true }, { dateInputFormat: 'DD/MM/YYYY' });
  }
  
  submit(){

  }

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
