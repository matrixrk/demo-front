import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  email: string | undefined ;
  password: string | undefined ;
  constructor(private http: HttpClient,private route: Router) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.email)
    console.log(this.password)
    this.http.post("http://localhost:8080/authenticate",{email:this.email,password:this.password}).subscribe(
      data=>{
       this.route.navigate(["profile"])
      }
    )
  }
}
