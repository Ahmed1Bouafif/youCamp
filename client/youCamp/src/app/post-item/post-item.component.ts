import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  ProductName: string='';
  ProductPicture: string='';
  ProductDescription: string='';
 homeIcon=faHome;

  constructor(private http: HttpClient ,private router: Router ) { }

  ngOnInit(): void {
  }
  onchangeN(event:any){
   
    this.ProductName = event
  }
  onchangeP(event:any){
    this.ProductPicture = event
  }
  onchangeD(event:any){
    this.ProductDescription = event
  }
  post(){
    var Item={
      ProductName:this.ProductName,
      ProductPicture:this.ProductPicture,
      ProductDescription:this.ProductDescription,
    }
    this.http.post('http://localhost:4000/api/addproduct',Item ).subscribe({next:data=>{
      console.log(data)
    },
    error:error=>{
      console.error(error)
    }})

  }
  navHome(){
    this.router.navigateByUrl('s');
  }
}
