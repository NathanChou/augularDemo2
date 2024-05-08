import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { ProjectComponent } from './project/project.component';
import { AbcComponent } from './abc/abc.component';


@NgModule({
  declarations: [
    TeacherComponent,
    ProjectComponent,
    AbcComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
