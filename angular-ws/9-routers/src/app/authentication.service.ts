import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map} from "rxjs";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  API_URL="http://localhost:8080"

  private loginStatus=new BehaviorSubject<boolean>(false);
  isLoggedIn$=this.loginStatus.asObservable();

  constructor(private http:HttpClient) {}

  login(username:string,password:string){
    return this.http.get<any>(`${this.API_URL}/users`).pipe(
      map((users:any)=>{
        const user=users.find(
          (u:any)=>u.username===username && u.password===password
        );
        this.loginStatus.next(!!user);
        return !!user;
      })
    );
  }

  logout(){
    this.loginStatus.next(false);
  }



}
