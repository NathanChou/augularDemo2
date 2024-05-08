import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export interface MyMemberGroup {
  userName: FormControl<string>,
  password: FormControl<string>,
  phone?: FormControl<string | null>
}


@Component({
  selector: 'app-demo-strictly-typed',
  templateUrl: './demo-strictly-typed.component.html',
  styles: [
  ]
})
export class DemoStrictlyTypedComponent implements OnInit {


  // memberForm=  this.fb.group({
  //     userName: new FormControl('', { nonNullable: true }),
  //     password: new FormControl('', { nonNullable: true }),
  //     phone: new FormControl<string|null>(null)  
  //   });
  // constructor(private fb: FormBuilder) {
  //   }
  
    memberForm!: FormGroup<MyMemberGroup>;
    // memberForm = new FormGroup(
    //   {
    //     userName: new FormControl('', { nonNullable: true }),
    //     password: new FormControl('', { nonNullable: true }),
    //     phone: new FormControl<string | null>(null)
    //   }
    // )
    
  constructor() {
    this.memberForm = new FormGroup<MyMemberGroup>(
      {
        userName: new FormControl('',{ nonNullable: true }),
        password: new FormControl('',{ nonNullable: true }),
        phone: new FormControl(null)
      }
    )
  }

  ngOnInit(): void {
  }
  getData() {
    // Model 
    let modelData = { userName: "Mary", password: "password", phone: "0911123456" };
    // let modelData = { userName: "Mary", password: "password", phone: "0911123456", email:"aaa@bbb.com" };
    this.memberForm.setValue(modelData);

  }
  onSubmit() {
    console.log(this.memberForm.value);
    // console.log(this.memberForm.value);
  }

  usePatchValue() {
    // let modelData = { userName: null , password: "password", phone: "0911123456" };
    // let modelData = { userName: "Mary", password: "password", phone: "0911123456" };
    let modelData = { userName: "Mary", password: "password", phone: "0911123456", email: "aaa@bbb.com" };
    this.memberForm.patchValue(modelData);
  }
  setPassword() {
    this.memberForm.patchValue({ password: "P@ssw0rd" });
  }

  reset() {
    this.memberForm.reset();
    console.log(this.memberForm);
  }

}
