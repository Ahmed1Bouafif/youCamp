import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { TestComponent } from './test/test.component';

import { AppComponent } from './app.component';

import { FirstHomeComponent } from './first-home/first-home.component';

import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './signup/signup.component';

import {PostListComponent} from './post-list/post-list.component'


import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstHomeComponent,
    TestComponent,
    SignupComponent,
    PostListComponent,
    LoginComponent
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
