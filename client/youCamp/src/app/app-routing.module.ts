import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketComponent } from './market/market.component';
import { CategoriesComponent } from './categories/categories.component';
import { PostListComponent } from './post-list/post-list.component';


const routes: Routes = [
  // 
];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'',component:PostListComponent},
    { path : 's' , component: MarketComponent ,
    children:[
      {path:'' , component : CategoriesComponent}
    ]}
  ])
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
