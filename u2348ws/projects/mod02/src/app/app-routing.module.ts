import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:"", redirectTo: "home", pathMatch:"full"  },
  { path: 'home', component: HomeComponent },

  {
  path: 'teacher',
  loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule)
},
{
  path: 'student',
  loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    {
      // preloadingStrategy: PreloadAllModules, 
      // enableTracing:true
    }

  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
