import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { Page6Component } from './page6/page6.component';
import { Page7Component } from './page7/page7.component';
import { TabsPageComponent } from './tabs-page/tabs-page.component';
import { Page8Component } from './page8/page8.component';
import { StepperPageComponent } from './stepper-page/stepper-page.component';


export const routes: Routes = [
  { path:'Home', component: HomeComponent, title: 'Home' },
  { path:'p1', component: Page1Component, title: 'Page1' },
  { path:'p2', component: Page2Component, title: 'Page2' },
  { path:'p3', component: Page3Component, title: "使用預設" },
  { path:'p4', component: Page4Component, title: "使用 matXX 各種提示" },
  { path:'p5', component: Page5Component, title: "mat-select" }  ,
  { path:'p6', component: Page6Component, title: "mat-datepicker" },
  { path:'p7', component: Page7Component, title: "tabs & other controls", 
    children: [
      { path:'p1', component: Page1Component, title: "appearance" },
      { path:'p2', component: Page2Component, title: "floatLabel" }
    ] 
  },
  { path:'tabs', component: TabsPageComponent, title: "練習 mat-tab" },
  { path:'p8', component: Page8Component, title: "Page8" },
  { path:'stepper', component: StepperPageComponent, title: "練習 mat-stepper" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
