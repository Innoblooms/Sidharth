import { Component } from '@angular/core';

@Component({
  selector: 'app-bank-reconciliation',
  templateUrl: './bank-reconciliation.component.html',
  styleUrls: ['./bank-reconciliation.component.scss']
})
export class BankReconciliationComponent {
  Data: any;


  autorenew() {
    alert('hello world');
  }

  onAdd() {

    alert('hello world');
  }
  leggi() {
    alert('hello world');
  }
  onsave() {

    alert('hello world');
  }

  onCancle() {

    alert('hello world');
  }


  onPrint() {

    window.print();
  }
}