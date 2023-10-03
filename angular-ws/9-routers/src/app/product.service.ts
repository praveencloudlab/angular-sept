import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL="http://localhost:8080"

  constructor(private http:HttpClient) {}


  findProducts(){
    return this.http.get(`${this.API_URL}/products`)
  }

  findProductById(id:any){
    return this.http.get(`${this.API_URL}/products/${id}`)
  }

  saveProduct(product:any){
    return this.http.post(`${this.API_URL}/products`,product);
  }


  loadCardItemsOfUser(userId:any){
    return this.http.get(`${this.API_URL}/cart/${userId}`)
  }


  // get user data :
  getUser(userId:any){
    return this.http.get(`${this.API_URL}/users/${userId}`)
  }






}
