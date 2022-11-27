import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AboutServiceService } from './about-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AboutComponent implements OnInit {

  books: any;
  isLoading: boolean = false;
  constructor(
    private aboutService: AboutServiceService,
    private router: Router
    ) {

   }

  ngOnInit(): void {
    this.getBooks();
  }
  getBooks(){
    console.log(this.isLoading);
    this.isLoading=true;
    console.log(this.isLoading);
    this.aboutService.getBook().subscribe(res=>{
      this.books = res;
      this.isLoading = false;
    console.log(this.isLoading);
    });
  }
  removeBooks(){

  }
}
