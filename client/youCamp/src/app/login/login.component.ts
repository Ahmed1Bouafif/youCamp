import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: String=''
  password: String=''
  constructor(private http: HttpClient,private router: Router) {
   }

  ngOnInit(): void {
    
  }
  
  enterr(){
    
    var user = {
      userName:this.userName, 
      password:this.password
    }
    // console.log(user)
    this.http.post('http://localhost:4000/login',user ).subscribe({next:data=>{
      // console.log(res)
      // localStorage.setItem("session", JSON.stringify(res));
      localStorage.setItem("session ", JSON.stringify(data))
    },
    error:error=>{
      console.error(error)
    }})
    this.router.navigateByUrl('/post');
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
