import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-demo-fg',
  templateUrl: './demo-fg.component.html',
  styles: [
  ]
})
export class DemoFGComponent implements OnInit {

  memberForm: FormGroup
  constructor() {
    this.memberForm = new FormGroup(
      {
        userName: new FormControl(''),
        password: new FormControl(''),
        phone: new FormControl('')
         
      });

      
    this.memberForm.valueChanges.subscribe(
      value => {
        console.log(value);
      }
    );
  }


  ngOnInit(): void {
  }
  getData() {
    // Model 
    // let modelData = { userName: "Mary", password: "password", phone: "0911123456" };
    let modelData = { userName: "Mary", password: "password", phone: "0911123456", email:"aaa@bbb.com" };
    this.memberForm.setValue(modelData);
  }
  onSubmit() {
    console.log(this.memberForm.value);
    console.log(this.memberForm.value.email);
  }

  usePatchValue(){
    // let modelData = { userName: "Mary", password: "password", phone: "0911123456" };
    let modelData = { userName: "Mary", password: "password", phone: "0911123456", email:"aaa@bbb.com" };
    this.memberForm.patchValue(modelData);
  }
  setPassword(){
    this.memberForm.patchValue({password:"P@ssw0rd"});
  }
}
