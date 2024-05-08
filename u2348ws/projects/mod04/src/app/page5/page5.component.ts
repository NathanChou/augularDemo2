import { Component, OnInit } from '@angular/core';
import { deptSubject } from '../subject';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styles: [
  ]
})
export class Page5Component implements OnInit {

  Manufacturer: string []=[
    "Apple" , 
    "三星", 
    "小米", 
    "Sony", 
    "OPPO"
  ]
  selected=0;
  constructor() { }

  deptSubject=deptSubject;
  selectSubject="U2348"
  ngOnInit(): void {
  }

}



