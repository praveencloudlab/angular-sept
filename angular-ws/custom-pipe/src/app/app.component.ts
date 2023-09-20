import { Component } from '@angular/core';
import EMPLOYEE_DATA from "./data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees=EMPLOYEE_DATA;

  searchText=''

}
