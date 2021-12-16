import { Component, OnInit } from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';




@Component({
  selector: 'app-market' ,
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css'],

})

export class MarketComponent implements OnInit {
 
  
 constructor(private router: Router){}
 sidebarIcon = faBars;
 
 public sidebarShow: boolean = false;
  ngOnInit(): void {
  }
  navigateR() {
    this.router.navigateByUrl('/categories.component');
  }
}
