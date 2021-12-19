import {faBars , faFolderPlus} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Component ,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-market' ,
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css'],

})

export class MarketComponent implements OnInit {
  
 constructor(private router: Router , private http:HttpClient){}
 sidebarIcon = faBars;
 sell=faFolderPlus;
 public sidebarShow: boolean = false;
 public InputShow: boolean = false;
 
  ngOnInit(): void {
    this.http.get<any>('http://localhost:4000/api/marketP').subscribe({
      next:Response=>{
        console.log(Response)
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

  post(){
    let url = "http://localhost:4000/api/addproduct";
    this.http.post<any>(url, { title: 'Angular POST Request Example' }).subscribe({
      next: data => {
          this.post = data;
      },
      error: error => {
          
          console.error('There was an error!', error);
      }
  })
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

