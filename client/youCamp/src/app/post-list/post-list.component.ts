import { Component, OnInit } from '@angular/core';
// import { products } from '../products';
import { HttpClient } from '@angular/common/http';
////
// import{FileUpLoadService} from


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  content:String="";
  imgUrl:String="";
  products: any= [];
  

  constructor(private http:HttpClient) {}
  
  

 
  ngOnInit(): void {
    // this.products = products;
    this.http.get('http://localhost:4000/post').subscribe(data => {
      this.products = data;
  })        
  }
  
  addPost(){
    let post ={
      content:this.content,
      imgUrl:this.imgUrl
    }
    let url = "http://localhost:4000/post"
    this.http.post(url, post).subscribe({
      next: data => {
          console.log(data);
          
      },
      error: error => {
          
          console.error( error);
      }
  })
  }
  onchangeContent(event:any){
    console.log(event)
    this.content = event
  }
  onchangeImg(event:any){
    console.log(event)
    this.imgUrl = event
  }
 

}
