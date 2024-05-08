import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { routes } from '../app-routing.module';

@Component({
  selector: 'app-tabs-page',
  templateUrl: './page7.component.html',
  styles: [
  ]
})
export class Page7Component implements OnInit {
  tabsRoute = routes.find(r=> r.path=="p7");

  constructor() { }

  ngOnInit(): void {
  }

  FocusChange(event:MatTabChangeEvent ){
    console.log(`FocusChange: ${event.tab.textLabel}`);
    console.log(event);
  }
  SelectedIndexChange(index:number){
    console.log(`tabSelectedIndexChange: index=${index}`);
  }
  SelectedTabChange(event:MatTabChangeEvent){
    console.log(`SelectedTabChange: tab=${event.tab.textLabel}`);
  }

}
