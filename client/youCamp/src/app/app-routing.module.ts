import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FirstHomeComponent} from './first-home/first-home.component'
import {SignupComponent} from './signup/signup.component'
import {PostListComponent} from './post-list/post-list.component'
import { MarketComponent } from './market/market.component';
import { CategoriesComponent } from './categories/categories.component';


const routes: Routes = [
  // 
];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'',component:PostListComponent},
    { path : 's' , component: MarketComponent} ,
    {path:'b' , component : CategoriesComponent},
    {path: 'l' , component: FirstHomeComponent},
    {path:'signup' , component: SignupComponent},
    {path:'post' , component: PostListComponent}
])]
})
   
  
  



export class AppRoutingModule { }
