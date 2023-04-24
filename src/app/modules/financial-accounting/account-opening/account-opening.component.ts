import { Component } from '@angular/core';


@Component({
  selector: 'app-account-opening',
  templateUrl: './account-opening.component.html',
  styleUrls: ['./account-opening.component.scss']
})
export class AccountOpeningComponent {
  Data:any;
  Account: any = ['Sales Order', 'Purchase Order']
  Voucher: any = ['Arvind', 'Rekha'];
  CostCenter: any = ['sales', 'purchase'];
 
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