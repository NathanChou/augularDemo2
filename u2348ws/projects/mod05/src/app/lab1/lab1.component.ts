import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Member } from '../member';
import { deptSubject } from '../subject';
import { CustomValidators } from '../custom-validators';
import { AsyncCustomValidator } from '../async-custom-validator';

@Component({
  selector: 'app-lab1',
  templateUrl: './lab1.component.html',
  styles: [
  ]
})
export class Lab1Component implements OnInit {

  memberForm = new FormGroup(
    {
      userName: new FormControl('',
       {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(2),
          CustomValidators.CheckExistName()],
          asyncValidators: [AsyncCustomValidator.AsyncCheckExistName()]
      }),
      password: new FormControl("", 
      {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
        ]
      }),
      confirmPassword: new FormControl<string | null>("",
        { validators: [Validators.required] }
      ),
      email: new FormControl<string | null>("",
        { validators: [Validators.email] }
      ),
      birthday: new FormControl<Date | null>(null),
      phone: new FormControl("", 
      {
        nonNullable: true,
        validators: [Validators.required]
      }),
      enabled: new FormControl<boolean | null>(null),
      subjects: new FormArray([new FormControl<string | null>(null)],
        { validators: [Validators.required] }),
    },
    {
      validators: [CustomValidators.EqualValue("password", "confirmPassword")]
    }
  );
    

  user: Member;

  constructor() { 
    this.user = {
      userName: "Mary",
      password: "1111",
      confirmPassword: null,
      email: null,
      birthday: new Date(2011, 10, 1),
      phone: "0911111111",
      enabled: true, 
      subjects: [null],
    }

    this.memberForm.setValue(this.user);
  }

  deptSubject = deptSubject;

  get subjects() {
    return this.memberForm.get('subjects') as FormArray;
  }

  AddSubject() {
    if (this.memberForm.get("subjects")) {
      this.subjects?.push(new FormControl(""));
    }
    else {
      this.memberForm.addControl("subjects",
        new FormArray([new FormControl("")]))
    }
  }

  deleteSubject(i: number) {
    if (this.memberForm.get("subjects")) {
      this.subjects?.removeAt(i);
    }
  }

  ngOnInit(): void {
  }

  showPWDIcon = "visibility";
  pwdType = "password";
  
  SeePassword() {
    if (this.pwdType === 'password') {
      this.pwdType = 'text';
      this.showPWDIcon = "visibility_off";
    } else {
      this.pwdType = 'password';
      this.showPWDIcon = "visibility";
    }
  }

  Saved() {
    console.log(this.memberForm.value);
    this.user = this.memberForm.value as Member;
    console.log(this.user);

  }
  AddNew(){
    this.memberForm.reset();
  }

  showErrorMessage(name: string, display: string): string {
    let formControl = this.memberForm.get(name);
    let errorMessage: string = "";
    if (formControl?.valid) {
      errorMessage = '';
    } else if (formControl?.errors?.['required']) {
      errorMessage = `${display} 必須輸入`;
    } else if (formControl?.errors?.['pattern']) {
      errorMessage = `${display} 格式有誤，請重新輸入`;
    } else if (formControl?.errors?.['minlength']) {
      errorMessage = `${display} 長度最短不得低於 ${formControl?.errors?.['minlength'].requiredLength} 個字元`;
    } else if (formControl?.errors?.['email']) {
      errorMessage = `${display} `;
    } else if (formControl?.errors?.['CheckExistName']) {
      errorMessage = `${display}${formControl?.errors?.['CheckExistName'].requiredValue}`;
    }
    return errorMessage;
  }

}
