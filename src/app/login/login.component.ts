import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup | any;
  data: any;
  constructor(private formBuilder: FormBuilder, private User: UserService, private route: Router) {

  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required,]),
      pass: new FormControl('', [Validators.required, Validators.minLength(5)])

    })

  }

  submit() {
    this.User.signup(this.loginForm.value);

    if (this.loginForm.valid) {
      alert('LOGIN SUCCESFUL');
      this.route.navigate(['/financial']);
    }
    else {
      alert("Something went wrong");
    }


  }



}









//1

 // if(this.loginForm.valid){
    //   this.User.signup(this.loginForm.value).subscribe((result:any)=>{
    //     if(result.sucess){
    //       console.log(result);
    //       this.route.navigate(['/financial']);
    //     }
    //     else{
    //       alert("Something went wrong");
    //     }
    //   });
    // }

    //2

 // this.User.signup(this.loginForm.value).subscribe((res) => {
    //   this.data = res;
    //   alert('LOGIN SUCCESFUL');
    //   console.log(this.loginForm.value);
    //   this.route.navigate(['/financial']);


    // })

    //3
  // submit() {

  //   this.User.signup(this.loginForm.value).subscribe((res: any) => {
  //     this.data = res;
  //     alert('LOGIN SUCCESFUL');

  //     console.log(this.loginForm.value);
  //     this.route.navigate(['/financial']);
  //     this.loginForm.reset()

  //   }, err => {
  //     alert("Something went wrong")

  //   })

  // }


//4
// const isUserExist  = this.User.signup.find((m:any) => m.username == this.loginForm.username &&  m.pass == this.loginForm.pass);
// if ( isUserExist.valid) {
//       alert('LOGIN SUCCESFUL');
//       this.route.navigate(['/financial']);
//     }
//     else {
//           alert("Something went wrong");
//         }