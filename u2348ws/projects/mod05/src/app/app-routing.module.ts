import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoFaComponent } from './demo-fa/demo-fa.component';
import { DemoFGComponent } from './demo-fg/demo-fg.component';
import { DemoStrictlyTypedComponent } from './demo-strictly-typed/demo-strictly-typed.component';
import { Demo1Component } from './demo1/demo1.component';
import { Lab1Component } from './lab1/lab1.component';

export const routes: Routes = [
  {path:"Demo1", component:Demo1Component, title:"Demo1"}, 
  {path:"DemoFG", component:DemoFGComponent, title:"DemoFG"},
  {path:"DemoST", component:DemoStrictlyTypedComponent, title:"DemoST"},
  {path:"Lab1", component:Lab1Component, title:"Lab1"},
  {path:"DemoFA", component:DemoFaComponent, title:"DemoFA"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
