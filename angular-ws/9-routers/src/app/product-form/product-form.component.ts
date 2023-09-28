import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styles: [
  ]
})
export class ProductFormComponent implements OnInit{

  productForm!:FormGroup;
  constructor(private fb:FormBuilder,private ps:ProductService) {}
  ngOnInit(): void {
    this.productForm=this.fb.group(
      {
        id:[''],
        title:[''],
        price:[''],
        description:[''],
        category:[''],
        image:[''],
        rating:this.fb.group(
          {
            rate:[''],
            count:['']
          }
        )
      }
    )
  }


  protected readonly onsubmit = onsubmit;

  onSubmit() {
    console.log(this.productForm.value)
    this.ps.saveProduct(this.productForm.value).subscribe(resp=>console.log(resp));
  }
}
