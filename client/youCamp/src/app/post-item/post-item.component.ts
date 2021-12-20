import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import {SharedService} from '../shared.service';
import {Item} from '../itemsInterface';



@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  // ProductName: string='';
  // price: number=0;
  // img: string='';
 homeIcon=faHome;

  constructor(private http: HttpClient ,private router: Router , 
    private  _SharedService:SharedService) { }
 public item: Item= {name:'',price:0,img:''};
  ngOnInit(): void {
    
  }
  public get Item():Item{
    return this.item;
}
  onchangeN(event:any){
    this.item.name = event
  }
  onchange(event:any){
    this.item.img= event
  }
  onchangeP(event:any){
    this.item.price = event
  }
  public addItem(){
    console.log('working');
    const currentItem:Item = {
        name:this.item.name,
        price:this.item.price,
        img:this.item.img
    };
    console.log('currentItem : ',currentItem);
    this.http.post('http://localhost:4000/api/addproduct',currentItem ).subscribe({
      next:data=>{
        this._SharedService.addItem(currentItem);
      console.log('here :',data);
      console.log('items from shared service',this._SharedService.items);
       
    },
    error:error=>{
      console.error(error)
    }})
   }
  // post(){
  //   console.log('working');
  //   var Item={
  //     ProductName:this.ProductName,
  //     price:this.price,
  //     img:this.img,
  //   }
  //   this.http.post('http://localhost:4000/api/addproduct',Item ).subscribe({
  //     next:data=>{
  //     console.log('here :',data);
  //     console.log(Item); 
  //   },
  //   error:error=>{
  //     console.error(error)
  //   }})

  
  navHome(){
    this.router.navigateByUrl('s');
  }
}
