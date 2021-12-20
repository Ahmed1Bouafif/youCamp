import { Component, OnInit } from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faCampground} from '@fortawesome/free-solid-svg-icons';
import {faTools} from '@fortawesome/free-solid-svg-icons';
import {faMitten} from '@fortawesome/free-solid-svg-icons';
import {faPumpSoap} from '@fortawesome/free-solid-svg-icons';
import {faFire, faCartPlus} from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';







@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  homeIcon=faHome;
 campsite=faCampground;
 gear=faTools;
 clothing=faMitten;
 hygiene=faPumpSoap;
 kitchen=faFire;
 shop=faCartPlus;
  constructor(private router: Router ,private http:HttpClient) { }
  sidebarIcon = faBars;
 public sidebarShow: boolean = false;

 items=[{productName:'',price:0,img:''}]

  ngOnInit(): void {
    this.http.get<any>('http://localhost:4000/api/marketP').subscribe({
      next:Response=>{
        console.log( 'Response : ',Response)
        this.items=Response;
        console.log('items',this.items);
        console.log(this.items[0].productName); 
       
         
      },
      error:error=>{
        console.error(error)
      }
    }) 
}
  navHome(){
    this.router.navigateByUrl('s');
  }

}
