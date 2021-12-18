import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { TestComponent } from './test/test.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketComponent } from './market/market.component';
import { CategoriesComponent } from './categories/categories.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { FirstHomeComponent } from './first-home/first-home.component';
import { SignupComponent } from './signup/signup.component';
import {PostListComponent} from './post-list/post-list.component'
import {  FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { PostItemComponent } from './post-item/post-item.component';




@NgModule({
  declarations: [
    AppComponent,
    FirstHomeComponent,
    TestComponent,
    SignupComponent,
    PostListComponent,
    MarketComponent,
    CategoriesComponent,
    PostItemComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule,
    BrowserAnimationsModule, 
    MatListModule,
  
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
