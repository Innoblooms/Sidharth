import { Component } from '@angular/core';



@Component({
  selector: 'app-lab-test-entry',
  templateUrl: './lab-test-entry.component.html',
  styleUrls: ['./lab-test-entry.component.scss']
})
export class LabTestEntryComponent {
  Data: any;
  Lab: any = ['Arvind', 'Rekha'];
  Sample: any = ['sales', 'purchase'];
  Technician: any = ['Arvind', 'Rekha'];



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