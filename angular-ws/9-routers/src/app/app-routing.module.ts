import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductFormComponent} from "./product-form/product-form.component";
import {CartComponent} from "./cart/cart.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";

const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path:'list-products',component:ProductListComponent},
  {path:'product-details/:pid',component:ProductDetailsComponent},
  {path:'add-product',component:ProductFormComponent},
  {path:'cart',component:CartComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
