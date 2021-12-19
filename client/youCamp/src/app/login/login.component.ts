import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: String=''
  password: String=''
  constructor(private http: HttpClient) {
   }

  ngOnInit(): void {
    
  }
  
  enterr(){
    
    var user = {
      userName:this.userName, 
      password:this.password
    }
    console.log(user)
    this.http.post('http://localhost:4000/login',user ).subscribe({next:data=>{
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
    this.password = event
  }

}
