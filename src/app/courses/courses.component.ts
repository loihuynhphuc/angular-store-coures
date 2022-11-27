import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CourseServiceService } from './course-service.service';
import { Courses } from './courses.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {

  
  courseRadioButton: string ='all';
  courses!: Courses[];
  constructor(
    private courseService: CourseServiceService,
  ) { 
  }

  ngOnInit(): void {
    this.getCourses();
  }
  getCourses(){
    this.courses = this.courseService.getCourses();
  }
  getAllQuantityCourses(){
    return this.courses.length;
  }
  getAllQuantityCoursesFree(){
    return this.courses.filter(course=>course.type ==='free').length;
  }
  getAllQuantityCoursesPremium(){
    return this.courses.filter(course=>course.type ==='premium').length;
  }
  onRadioButtonChange(valueRadioCourse:string){
    this.courseRadioButton = valueRadioCourse;
  }
  

}
