import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-page8',
  templateUrl: './page8.component.html',
  styles: [
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false, 
        showError: true }
    }
  ]
})
export class Page8Component implements OnInit {
  @ViewChild(MatStepper) stepper: MatStepper | any;

  contractForm: FormGroup
  constructor() {
    this.contractForm = new FormGroup({
      "userName": new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  SetComplete(isChecked: boolean) {

      this.stepper.selected.completed = isChecked;    

    // this.stepper?.next();
    console.log(isChecked);
    console.log(this.stepper.selected.completed);
  }
  SetEditable(isChecked: boolean) {


      this.stepper.selected.editable = !isChecked;
    
      console.log(this.stepper.selected.editable);
  }

}
