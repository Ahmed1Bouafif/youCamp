import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TestComponent } from './test/test.component';

import { AppComponent } from './app.component';

import { FirstHomeComponent } from './first-home/first-home.component';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstHomeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
