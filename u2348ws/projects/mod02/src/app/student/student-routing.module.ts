import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectResolver } from './subject.resolver';

const routes: Routes = [{ path: '', component: StudentComponent, 
children: [
  {
    path: 'subject',
    component: SubjectComponent
  },
  {
    path: 'subject/:id',
    resolve: { subject: SubjectResolver},
    component: SubjectComponent
  }]

 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
