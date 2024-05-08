import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseDemo1Component } from './promise-demo1/promise-demo1.component';
import { PromiseDemo2Component } from './promise-demo2/promise-demo2.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';

export const routes: Routes = [
  {path:'promise-demo1', component: PromiseDemo1Component, title: 'Promise Demo 1'},
  {path:'promise-demo2', component: PromiseDemo2Component, title: 'Promise Demo 2'},
  {path:'demo1', component: Demo1Component, title: 'RxJS 三物件'},
  {path:'demo2', component: Demo2Component, title: 'RxJS pipe & operator'},
  {path:'demo3', component: Demo3Component, title: 'Angular RXJS - fromEvent()'},
  {path:'demo4', component: Demo4Component, title: 'ASYNC PIPE'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
