import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layout/default/default.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatIconModule } from '@angular/material/icon';

import { MatInputModule } from '@angular/material/input';

import { LoginComponent } from './login/login.component';
import { FinancialComponent } from './financial/financial.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TermAndConditionComponent } from './term-and-condition/term-and-condition.component';




@NgModule({
  declarations: [
    AppComponent, LoginComponent, FinancialComponent, TermAndConditionComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
