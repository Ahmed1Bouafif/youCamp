import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MarketComponent} from './market.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
imports:[BrowserModule , NgbModule],
// 
declarations:[MarketComponent],
exports:[MarketComponent],
bootstrap: [MarketComponent]
})
export class MarketModule {}