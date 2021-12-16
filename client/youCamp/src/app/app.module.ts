import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { PostListComponent } from './post-list/post-list.component'; 
import { MarketComponent } from './market/market.component';
import { CategoriesComponent } from './categories/categories.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'



    
//import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    MarketComponent,
    CategoriesComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
