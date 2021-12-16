import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { TestComponent } from './test/test.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketComponent } from './market/market.component';
import { CategoriesComponent } from './categories/categories.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'


import { FirstHomeComponent } from './first-home/first-home.component';
import { SignupComponent } from './signup/signup.component';

import {PostListComponent} from './post-list/post-list.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FirstHomeComponent,
    TestComponent,
    SignupComponent,
    PostListComponent,
    MarketComponent,
    CategoriesComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
