import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styles: [
  ]
})
export class ProductDetailsComponent implements OnInit{
  constructor(private route:ActivatedRoute,private ps:ProductService) {}

  product!:any

  ngOnInit(): void {
    this.ps.findProductById(this.route.snapshot.paramMap.get('pid')).subscribe(response=>this.product=response)
  }





}
