import { Component, OnInit } from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import {faHome} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  homeIcon=faHome;

  constructor(private router: Router) { }
  sidebarIcon = faBars;
 public sidebarShow: boolean = false;

  ngOnInit(): void {
  }
  navHome(){
    this.router.navigateByUrl('s');
  }

}
