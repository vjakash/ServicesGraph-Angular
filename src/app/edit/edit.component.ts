import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  userData;
  currentIndex = this.activatedRoute.snapshot.params.id;
  constructor(
    private service: UserService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.userData = this.fb.group({
      name: this.fb.control(''),
      email: this.fb.control(''),
      phone: this.fb.control(''),
    });
    this.service.getDataById(this.currentIndex).subscribe((data) => {
      delete data.id;
      this.userData.setValue(data);
      // console.log(data);
    });
  }

  ngOnInit(): void {}
  updateData() {
    this.service.updateData(this.currentIndex,this.userData.value).subscribe(()=>{
      this.router.navigate(['/']);
    })
  }
}
