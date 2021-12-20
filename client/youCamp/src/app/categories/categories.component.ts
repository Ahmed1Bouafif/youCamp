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

  ngOnInit(): void {
   
  
  }
  navHome(){
    this.router.navigateByUrl('s');
  }

}
