import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { SearchComponent } from './search/search.component';
import { FillterComponent } from './fillter/fillter.component';
import { DateComponent } from './date/date.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailCourseComponent } from './courses/detail-course/detail-course.component';

import { CourseServiceService } from './courses/course-service.service';
import { AboutServiceService } from './about/about-service.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesComponent,
    SearchComponent,
    FillterComponent,
    DateComponent,
    HomeComponent,
    PageNotFoundComponent,
    DetailCourseComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CourseServiceService,AboutServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
