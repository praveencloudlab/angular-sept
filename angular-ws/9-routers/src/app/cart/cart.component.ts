import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit{
  cartData!:any;
  constructor(private ps:ProductService) {}

  ngOnInit(): void {
    this.ps.loadCardItemsOfUser(5).subscribe(resp=>{
      this.cartData=resp;
      this.loadProductDetails();
    });

  }

  private loadProductDetails(){

  this.cartData.products.forEach((prod:any)=>{
    console.log(prod)
    this.ps.findProductById(prod.productId).subscribe(details=>prod.details=details);
  })
  }











}
