import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss']
})
export class FinancialComponent {
  constructor(private route: Router) {

  }
  previous() {
    alert('hello world');
    this.route.navigate(['login']); 
  }
  next() {
    alert('hello world');
    this.route.navigate(['/dashboard']); 
  }
}

