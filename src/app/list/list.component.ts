import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
userData;
sample;
  constructor(private service:UserService) {
    this.service.getSample().subscribe((data)=>{
      this.sample=data;
    })
    this.loadData();
  }
  ngOnInit(): void {
  }
loadData(){
  this.service.getData().subscribe((data)=>{
    this.userData=data;
  });
}
  deleteData(id){
    // console.log("inside delete");
    let cnfrm=confirm("Are You Sure? This will permanantly delete the data");
    if(cnfrm){
      this.service.deleteData(id).subscribe(()=>{
        this.loadData();
      })
    }
    
  }

}
