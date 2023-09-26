import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: [
  ]
})
export class ProductListComponent implements OnInit{

  products!:any
  constructor(private ps:ProductService) {}

  ngOnInit(): void {
    this.ps.findProducts().subscribe(response=>this.products=response);
  }

}
