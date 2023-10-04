import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductFormComponent} from "./product-form/product-form.component";
import {CartComponent} from "./cart/cart.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuardService} from "./auth-guard.service";

const routes: Routes = [

  {path:'',component:HomeComponent,canActivate:[AuthGuardService]},
  {path:'list-products',component:ProductListComponent,canActivate:[AuthGuardService]},
  {path:'product-details/:pid',component:ProductDetailsComponent,canActivate:[AuthGuardService]},
  {path:'add-product',component:ProductFormComponent},
  {path:'cart',component:CartComponent,canActivate:[AuthGuardService]},
  {path:'login',component:LoginComponent},
  {path:'**',redirectTo:'/login'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
