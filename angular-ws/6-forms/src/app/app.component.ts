import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  productForm!:FormGroup;

  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {

    this.productForm=this.fb.group({
        description: [],
        name: ['', [Validators.required,Validators.minLength(3)]],
        price: ['',[Validators.required,Validators.pattern('[0-9]*')]]

      }
    )
  }

   fc(){
     return this.productForm.controls;
   }

  saveProduct() {
    if(this.productForm.valid)
    console.log(this.productForm.value)

  }
}
