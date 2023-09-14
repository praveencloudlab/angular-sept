import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


 
  hideText=false
  imagePath="assets/images/tj.webp"
  name!:string;
  pname!:string;


  f1(){
    console.log(">> f1 function");
  }

  f2(data:any){
      this.hideText=data.target.checked
  }

  f3(data: any) {
   this.name=data.target.value
  }

  

}
