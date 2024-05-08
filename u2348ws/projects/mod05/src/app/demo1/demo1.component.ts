import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styles: [
  ]
})
export class Demo1Component implements OnInit {

  userNameFC: FormControl;
  constructor() {
    this.userNameFC = new FormControl('');

    this.userNameFC.valueChanges.subscribe(
      newValue =>{
        console.log(`New value:${newValue}`);        
      } 
    )
  
  }
  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.userNameFC.value);
  }
  Change(){
    this.userNameFC.setValue("Mary");
  }
}
