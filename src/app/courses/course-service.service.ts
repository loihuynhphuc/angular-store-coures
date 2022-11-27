import { Injectable } from '@angular/core';
import { coursesDb } from './coursesdb';
import { Courses } from './courses.model';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  constructor() {
   }
   getCourses() :Courses[]{
      return coursesDb;
   }
   getCourseWithId(id:number) :Courses|undefined{
    return coursesDb.find(course=>course.id === id);
 }
}
