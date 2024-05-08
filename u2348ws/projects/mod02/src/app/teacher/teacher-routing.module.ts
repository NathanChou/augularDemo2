import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher.component';
import { ProjectComponent } from './project/project.component';
import { AbcComponent } from './abc/abc.component';

const routes: Routes = [{
  path: '', component: TeacherComponent,
  children: [
    { path: 'project', component: ProjectComponent },
    { path: 'abc', component: AbcComponent }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
