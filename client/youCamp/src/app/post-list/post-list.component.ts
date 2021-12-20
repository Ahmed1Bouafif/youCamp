import { Component, OnInit } from '@angular/core';
// import { products } from '../products';
import { HttpClient } from '@angular/common/http';
////
import { Router } from '@angular/router';
// import{FileUpLoadService} from


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  content:String="";
  imgUrl:String="";
  createdAt:String="";
  products: any= [];
  user:String="";
  post:String="";
  com:String= "";
  comments:any= []
  // localStorage:any="";
  

  constructor(private http:HttpClient,private router: Router) {}
  
  

 
  ngOnInit(): void {
    // this.products = products;
    this.http.get('http://localhost:4000/post').subscribe(data => {
      this.products = data;
  })        
  }
  
  addPost(){
    let post ={
      content:this.content,
      imgUrl:this.imgUrl,
      userId:localStorage.getItem('userId')
      
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
  fetchComments() {
    
    
    this.http.get("http://localhost:4000/comment").subscribe(data => {
      this.comments = data;
  })        
  }
  addComment(){
    let comm={com:this.com,}
    let url = "http://localhost:4000/comment"
    this.http.post(url, comm).subscribe({
      next: data => {
          console.log(data);
          
      },
      error: error => {
          
          console.error( error);
      }
  })
      
    }
    onchangeComment(event:any){
      console.log(event)
      this.com = event
    }
   
  
  // addComm(){
  //   let Comm ={
  //     content:this.content,
  //     user:this.user,
  //     post:this.post
  //   }
  //   let url = "http://localhost:4000/post"
  //   this.http.post(url, Comm).subscribe({
  //     next: data => {
  //         console.log(data);
          
  //     },
  //     error: error => {
          
  //         console.error( error);
  //     }
  // })
  // }
  // onchangeComment(event:any){
  //   console.log(event)
  //   this.content = event
  // }

  navigateS() {
    this.router.navigateByUrl('/s');

}
navigateHome() {
    this.router.navigateByUrl('/');

}
navigatelogout() {
    this.router.navigateByUrl('/signup/login');

}
}
