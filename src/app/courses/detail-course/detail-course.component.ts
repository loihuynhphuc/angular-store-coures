import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';
import { CourseServiceService } from '../course-service.service';
import { Courses } from '../courses.model';
@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.css']
})
export class DetailCourseComponent implements OnInit {

  // course = 
  //   {
  //     id: 1,
  //      name: 'javascript for beginner',
  //      author:'john',
  //      type: 'free',
  //      description: 'In lesson you will learn javascript',
  //      img:'/assets/js-img.png'
  //   }
  course!: Courses|undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private coursesService: CourseServiceService,
    private router: Router
    ) {

   }
   ngOnInit(): void {
     this.getIdCourse();
  }
  
  getIdCourse(): any{
    let idParamCourse = Number(this.route.snapshot.paramMap.get('id'));
    this.course = this.coursesService.getCourseWithId(idParamCourse);
  }
}
