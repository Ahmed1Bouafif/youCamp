import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketComponent } from './market/market.component';
import { CategoriesComponent } from './categories/categories.component';


const routes: Routes = [
  { path : '' , component: MarketComponent ,
    children:[
      {path:'' , component : CategoriesComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
