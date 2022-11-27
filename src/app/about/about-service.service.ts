import { Injectable } from '@angular/core';
import { Courses } from '../courses/courses.model';
import { HttpClient } from '@angular/common/http';
import { Observable,of} from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutServiceService {
  
  constructor(
    private http: HttpClient
  ) {

   }
   getBook(): Observable<any>{
        return this.http.get('http://localhost:3000/books')

   }
   
  
}
