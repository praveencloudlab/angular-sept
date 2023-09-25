import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "./user.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private userService:UserService,private fb:FormBuilder) {}

  users:any
  user:any
  editUserObj:any
  userId!:number;
  isEdit=false;
  userForm!:FormGroup;

  loadUser(){
    console.log(">>>>> load user >>>>>>" +this.userId)
    this.userService.findUser(this.userId).subscribe(resp=>this.user=resp);
  }

  editUser(userId:any){
    console.log("IDDDD>>>> "+userId)
    this.isEdit=true;
    this.userService.findUser(userId).subscribe(resp=>this.userForm.patchValue(resp));
    console.log(this.editUserObj)

  }

  ngOnInit(): void {

    this.userForm=this.fb.group(
      {
        id:[],
        name:[],
        username:[],
        email:[]
      }
    )

   // this.http.get('https://jsonplaceholder.typicode.com/users')
     // .subscribe(response=>this.users=response)
    this.userService.findAllUsers().subscribe(resp=>this.users=resp);
  }
}
