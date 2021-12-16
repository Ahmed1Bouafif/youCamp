import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  post=String;
  constructor(private http:HttpClient) {}
  products = products;
  

 
  ngOnInit(): void {
  }
  
  addPost(){
    let url = "http://localhost:4200/post"
    this.http.post<any>(url, { title: 'Angular POST Request Example' }).subscribe({
      next: data => {
          this.post = data;
      },
      error: error => {
          
          console.error('There was an error!', error);
      }
  })
  }
 

}
