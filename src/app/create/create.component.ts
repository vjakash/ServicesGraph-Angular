import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {FormBuilder,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
userData;
  constructor(private service:UserService,private fb:FormBuilder,private router:Router) { 
    this.userData=this.fb.group({
      name:this.fb.control(""),
      email:this.fb.control(""),
      phone:this.fb.control(""),

    })
    // this.userData=this.service.getData();
    // console.log(this.userData)
  }

  ngOnInit(): void {
  }
createData(){

  this.service.postData(this.userData.value).subscribe((data)=>{
    this.router.navigate(["/"]);
  });
}
}
