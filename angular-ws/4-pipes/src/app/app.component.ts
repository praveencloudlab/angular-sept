import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  person={
    id:1024,
    name:'Praveen',
    age:76,
    address:'London'
  }


  today=new Date();

  protected readonly JSON = JSON;
}
