import { Component,ViewChild,ElementRef ,OnInit, ViewEncapsulation} from '@angular/core';
import { DateComponent } from './date/date.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  @ViewChild(DateComponent,{static: true}) dateComponent!: DateComponent;
  @ViewChild('dateBox') dateBox!: ElementRef;
  @ViewChild('ageBox') ageBox!: ElementRef;

  constructor(
    public location: Location
  ){

  }
  
  caculateAge(){
    let birthYear = new Date(this.dateBox.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    this.ageBox.nativeElement.value = currentYear - birthYear;
  }

 
  ngOnInit() :void{
     
  }
  title = 'angular-store-courses';
}
