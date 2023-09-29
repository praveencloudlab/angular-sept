import {Component, Input} from '@angular/core';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.css']
})
export class CartProductsComponent {


  @Input()
  products!:any
  prod!:any;
  constructor(private ps:ProductService) {
  }
  getProduct(id:any){
    this.ps.findProductById(id).subscribe(resp=>this.prod=resp);
  }

}
