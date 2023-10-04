import { Component } from '@angular/core';
import {AuthGuardService} from "../auth-guard.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username!:string;
  password!:string
  errorMessage!:string

  constructor(private authService:AuthenticationService,private router:Router) {}

  onLogin():void{
    this.authService.login(this.username,this.password).subscribe(
      (isLoggedIn)=>{
        if(isLoggedIn){
          this.router.navigate(['/list-products']);
        }else{
          this.errorMessage="Invalid username or passwword";
        }
      },
      (error)=>{
        this.errorMessage='An error occurred.Please try again later';
      }
    );
  }




}
