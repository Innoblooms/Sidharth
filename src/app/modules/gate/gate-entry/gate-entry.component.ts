import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-gate-entry',
  templateUrl: './gate-entry.component.html',
  styleUrls: ['./gate-entry.component.scss']
})

export class GateEntryComponent {

  id: any = [];

  CompanyArray: any = [];
  GateForm: any = FormGroup;
  Gate: any = ['01', '02'];
  Vehicle: any = ['car', 'truck'];
  Purpose: any = ['Loading', 'Un-Loading'];
  Transporter: any = ['ram', 'anil'];
  Single: any = ['yes', 'no'];
  Weighment = ['yes', 'no'];
  Gross: any = ['kg', 'tonnes'];
  Vehicale: any = ['Cycle', 'Car'];
  Tare: any = ['kg', 'tonnes'];
  Net: any = ['kg', 'tonnes'];
  Data: any = [];

  constructor(private user: UserService) { }

  ngOnInit() {

    this.GateForm = new FormGroup({

      VoucherType: new FormControl(''),
      entryNo: new FormControl(''),
      Vehicle: new FormControl(''),
      vehicleNo: new FormControl(''),
      partyName: new FormControl(''),
      driverName: new FormControl(''),
      Gate: new FormControl(''),
      date: new FormControl(''),
      time: new FormControl(''),
      Purpose: new FormControl(''),
      Weighment: new FormControl(''),
      Single: new FormControl(''),
      Transporter: new FormControl(''),
      remark: new FormControl(''),
      Gross: new FormControl(''),
      Tare: new FormControl(''),
      Net: new FormControl(''),
      slipno: new FormControl(''),
      outdate: new FormControl(''),
      Modified: new FormControl(''),

    });

  }

  
  submit() {
    // this.Data.upto(this.id,this.user).subscribe((res:any)=>{
    //   this.Data=this.Data();
    // })

  }

  onAdd() {
    alert("gujdkld");


  }

  leggi() {
    alert('hello world');
  }

  onDelete() {

    this.user.delete(this.GateForm.value).subscribe((res) => {
      console.log(res);
    });
  }

  dataEdit(id: any) {
   
    this.user.getData1(id).subscribe(res => {
      this.GateForm.patchValue(res)
    })
  }

  onedit(data: any) {
    console.log(data);
    this.user.upto(this.GateForm.value).subscribe((res) => {

    });
  }

  onSave() {

    this.user.addData(this.GateForm.value).subscribe((res) => {
      console.log("data is save sucessfull !");
    });

  }

  onForward() {

    this.user.record().subscribe((result: any) => {
      console.log("result data", result.data)
      this.CompanyArray = result.data;
    });
  }


  onBackward() {


    console.log('{fat}');
  }

  onPrint() {

    window.print();
  }

}





