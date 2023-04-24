import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // URL =" http://localhost:3000/users";

  // constructor(private http: HttpClient) {}

  // users() {
  //   return this.http.get(this.URL);
  // }

  // signup(data:any){
  //   return this.http.post(this.URL,data);
  // }



  // url ="http://localhost:8080/api/gete2";
  // userlogin(){
  //   this.http.get(this.url);


  // }
  url: any
  constructor(private http: HttpClient, private route: Router) {
    this.url = "http://localhost:8080/api "

  }



  signup(item: any) {

    return this.http.post(`http://localhost:9200/mylogin/add`, item).subscribe((result: any) => {

      localStorage.setItem("token", result.token);


      // console.log(result);
    })

  }

  profile() {
    // let headers = new HttpHeaders()
    //   .set("Authorization", ` bearer ${localStorage.getItem("token" )}`)
    this.http.post(`http://localhost:9200/profile`, {}).subscribe((result: any) => {
      // console.log(result);
    })

  }

  getData1(id: any): Observable<any> {
    return this.http.get(`${this.url}/gate2/1/${id}`);
  }

  upto(data: any) {
    return this.http.put(`${this.url}/gate2/update/1/${data.id}`, data);

  }


  addData(data: any) {
    return this.http.post(`http://localhost:8085/api/entry/add`, data)
  }



  record() {
    return this.http.get(`http://localhost:8080/api/gete2`);
  }



  delete(data: any) {
    return this.http.delete(`http://localhost:8085/api/entry/delete/${data.id}`)
  }


}



