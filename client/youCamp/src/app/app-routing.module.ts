import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstHomeComponent} from './first-home/first-home.component'
import {SignupComponent} from './signup/signup.component'
import {PostListComponent} from './post-list/post-list.component'


const routes: Routes = [
  {path: '' , component: FirstHomeComponent},
  {path:'signup' , component: SignupComponent},
  {path:'post' , component: PostListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
