import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AboutModule } from './about/about.module';
import { CoursesComponent } from './courses/courses.component';
import { DetailCourseComponent } from './courses/detail-course/detail-course.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const Routes: Routes =[
  {path: '',component: HomeComponent},
  {path: 'home',component: HomeComponent},
  {path: 'courses',component: CoursesComponent },
  {path: 'courses/:id',component:  DetailCourseComponent},
  {path: '**',component: PageNotFoundComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(Routes),AboutModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
