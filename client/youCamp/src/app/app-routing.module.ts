import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketComponent } from './market/market.component';
import { CategoriesComponent } from './categories/categories.component';
import { PostListComponent } from './post-list/post-list.component';


const routes: Routes = [
  // { path : '' , component: MarketComponent ,
  //   children:[
  //     {path:'' , component : CategoriesComponent}
  //   ]}
];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'',component:PostListComponent},
    { path : 's' , component: MarketComponent} ,
    {path:'cat' , component : CategoriesComponent}
  ])
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
