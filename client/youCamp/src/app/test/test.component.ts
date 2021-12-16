import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:4000/api/test').subscribe({
      next:Response=>{
        // console.log(Response)
      },
      error:error=>{
        // console.error(error)
      }
    })
  }
  product='hello again'
  // test(){
   
  // }

}
