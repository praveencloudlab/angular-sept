import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL="http://localhost:3000"

  constructor(private http:HttpClient) { }

  findAllUsers(){
    return this.http.get(`${this.API_URL}/users`)
  }

  findUser(id:any){
    return this.http.get(`${this.API_URL}/users/${id}`)
  }





}
