import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor() { }

  getByID (id:string): Observable<string>{
    return of(`id:${id} , name: XXX${id}`);
  }

}
