import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userName: String=''
  firstName: String=''
  adress: String=''
  phoneNumber: String=''
  password: String=''
  constructor(private http: HttpClient) {
   }

  ngOnInit(): void {
    
  }
  
  enter(){
    
    var user = {
      userName:this.userName, 
      firstName:this.firstName,
      Adress:this.adress,
      phoneNumber:this.phoneNumber,
      password:this.password
    }
    console.log(user)
    this.http.post('http://localhost:4000/signup',user ).subscribe({next:data=>{
      console.log(data)
    },
    error:error=>{
      console.error(error)
    }})
  }

  
  

  onchange(event:any){
    console.log(event)
    this.userName = event
  }
  onchange1(event:any){
    console.log(event)
    this.firstName = event
  }
  onchange2(event:any){
    console.log(event)
    this.adress = event
  }
  onchange3(event:any){
    console.log(event)
    this.phoneNumber = event
  }
  onchange4(event:any){
    console.log(event)
    this.password = event
  }


}
