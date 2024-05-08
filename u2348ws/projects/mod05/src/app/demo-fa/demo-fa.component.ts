import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-demo-fa',
  templateUrl: './demo-fa.component.html',
  styles: [
  ]
})
export class DemoFaComponent implements OnInit {

  constructor() {
  }

  item = new FormGroup({
    book: new FormControl('', { nonNullable: true }),
    qty: new FormControl(0, { nonNullable: true })
  });
  group = new FormGroup({
    name: new FormControl('',{ nonNullable: true } ), 
    list: new FormArray([this.item])
  });

  get list() {
    return this.group.controls["list"];
  }
  // FormArray 包含 一個 FormControl
  // group = new FormGroup({
  //   name: new FormControl('',{ nonNullable: true } ), 
  //   list: new FormArray([new FormControl()])
  // });
  addItem() {
    // this.list.push(new FormControl());
    this.list.push(new FormGroup({
      book: new FormControl('', { nonNullable: true }),
      qty: new FormControl(0, { nonNullable: true })
    }));
  }
  removeItem(index: number) {
    this.list.removeAt(index);
  }
  ngOnInit(): void {
  }

}

