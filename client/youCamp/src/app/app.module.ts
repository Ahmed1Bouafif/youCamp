import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TestComponent } from './test/test.component';

import { AppComponent } from './app.component';

import { FirstHomeComponent } from './first-home/first-home.component';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './signup/signup.component';


import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FirstHomeComponent,
    TestComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
