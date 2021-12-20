import {faBars , faFolderPlus} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Component ,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-market' ,
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css'],

})

export class MarketComponent implements OnInit {
  
 constructor(private router: Router , private http:HttpClient , private  _SharedService:SharedService){}
 sidebarIcon = faBars;
 sell=faFolderPlus;
 public sidebarShow: boolean = false;
 items=[];

  ngOnInit(): void {
    this.http.get<any>('http://localhost:4000/api/marketP').subscribe({
      next:Response=>{
        console.log( 'Response : ',Response)
        this.items=Response;
        console.log('items',this.items);
        // console.log(this.items[0].price);
        
        
      },
      error:error=>{
        console.error(error)
      }
    })
    

  }
  navigateR() {
    this.router.navigateByUrl('/cat');
  }
  navigate() {
    this.router.navigateByUrl('/postItem');
  }
  filter(){
    // this.http.get<any>('http://localhost:4000/api/filterProducts').subscribe({
    //   next:Response => {
    //     console.log(Response)
    //   },
    //     error:error=>{
    //       console.error(error)
    //     }
        
    //   })
    }
  }

