import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FirstHomeComponent} from './first-home/first-home.component'
import {SignupComponent} from './signup/signup.component'
import {PostListComponent} from './post-list/post-list.component'
import { MarketComponent } from './market/market.component';
import { CategoriesComponent } from './categories/categories.component';


const routes: Routes = [
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '' , component: FirstHomeComponent},
    {path:'posts',component:PostListComponent},
    {path : 'Market' , component: MarketComponent} ,
    {path:'signup' , component: SignupComponent},
      {path:'categories' , component : CategoriesComponent}
    ])],
    exports: [RouterModule]
  })
  
  
  
  
//   @NgModule({
//     imports: [RouterModule.forRoot(routes)
     
// ],
// })
export class AppRoutingModule { }
