import { Component } from '@angular/core';


@Component({
  selector: 'app-quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.scss']
})
export class QualityComponent {
  Data: any;
  Sample: any = ['sales', 'purchase'];
  Technician: any = ['Arvind', 'Rekha'];
  Ref: any = ['Arvind', 'Rekha'];
  RefNo: any = ['sales', 'purchase'];
  Test: any = ['sales', 'purchase'];

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