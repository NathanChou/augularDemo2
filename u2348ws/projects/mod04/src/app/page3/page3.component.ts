import { Component, OnInit } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styles: [
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill', floatLabel: 'auto' }
    }
  ]
})
export class Page3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
