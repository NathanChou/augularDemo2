import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UseTableComponent } from './use-table/use-table.component';
import { UseMatTableComponent } from './use-mat-table/use-mat-table.component';

export const routes: Routes = [
  {path:"useTable", component:UseTableComponent, title:"use table"}, 
  {path:"useMatTable", component:UseMatTableComponent, title:"use mattable"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
