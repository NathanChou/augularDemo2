import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page6',
  templateUrl: './page6.component.html',
  styles: [
  ]
})
export class Page6Component implements OnInit {
 
  startAt : Date;
  constructor() { 
    let now =  new Date(Date.now());
    let ago20year = now.setFullYear(now.getFullYear()-20, now.getMonth());
    this.startAt =new Date(ago20year) ;
  }

  ngOnInit(): void {
  }

}
