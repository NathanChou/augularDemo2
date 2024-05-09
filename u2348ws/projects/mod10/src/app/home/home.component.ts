import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  today = Date.now();
  amount = 38500;
  price = 30.25;

  constructor() { }

  ngOnInit(): void {
  }

}
