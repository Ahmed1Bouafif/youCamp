import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FirstHomeComponent } from './first-home/first-home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



// import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    FirstHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    // HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
