import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: [
  ]
})
export class StudentComponent {
  router=inject(  Router) ;
  passDataByResolve() {
    this.router.navigate(['/student/subject', '101']);
  }

}
