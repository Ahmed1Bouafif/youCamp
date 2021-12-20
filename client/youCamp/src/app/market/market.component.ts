import {faBars , faFolderPlus} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Component ,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//  import {SharedService} from '../shared.service';
//  import {PostItemComponent} from '../post-item/post-item.component'

@Component({
  selector: 'app-market' ,
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css'],

})

export class MarketComponent implements OnInit {
  ProductName: string='' ;
  img:string='' ;
  price:number=0;
 constructor(private router: Router , private http:HttpClient  ){}
 sidebarIcon = faBars;
 sell=faFolderPlus;
 public sidebarShow: boolean = false;
public items=[{ProductName:'',price:0,img:''}]
  ngOnInit(): void {
    this.http.get<any>('http://localhost:4000/api/marketP').subscribe({
      next:Response=>{
        console.log( 'Response : ',Response)
        this.items=Response;
        console.log('items',this.items);
        console.log(this.items[0]);  
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

