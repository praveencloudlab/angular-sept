import { Component } from '@angular/core';
import products from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  name: string="Ozvitha";

  data=products;

  numbers=[10,20,54,43,32,98]



}
