import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FirstHomeComponent} from './first-home/first-home.component'
import {SignupComponent} from './signup/signup.component'
import {PostListComponent} from './post-list/post-list.component'
import {LoginComponent} from './login/login.component'
import { MarketComponent } from './market/market.component';
import { CategoriesComponent } from './categories/categories.component';
import { PostItemComponent } from './post-item/post-item.component';



// const routes: Routes = [
//   {path: '' , component: FirstHomeComponent},
//   {path:'signup' , component: SignupComponent},
//   {path:'post' , component: PostListComponent}
// ]

const routes: Routes = [
  {path: '' , component: FirstHomeComponent},
  {path: 'signup' , component: SignupComponent},
  {path:'post' , component: PostListComponent},
  {path:'login'&&'signup/login', component:LoginComponent},
  {path:'post' , component: PostListComponent},
  {path:'s' , component: MarketComponent},
  {path:'cat' , component: CategoriesComponent},
  
]

@NgModule({
  imports: [RouterModule.forRoot([

    // {path: '' , component: FirstHomeComponent},
    // {path:'posts',component:PostListComponent},
    // {path : 'Market' , component: MarketComponent} ,
    // {path:'signup' , component: SignupComponent},
    //   {path:'categories' , component : CategoriesComponent}
    {path: '' , component: FirstHomeComponent},
    {path: 'signup' , component: SignupComponent},
    {path:'post' , component: PostListComponent},
    {path:'login'&&'signup/login', component:LoginComponent},
    // {path:'post' , component: PostListComponent},
    {path:'s' , component: MarketComponent},
    {path:'cat' , component: CategoriesComponent},
    ])],
    exports: [RouterModule]
  })
  
  
  
  
//   @NgModule({
//     imports: [RouterModule.forRoot(routes)
     
// ],
// })
export class AppRoutingModule { }
