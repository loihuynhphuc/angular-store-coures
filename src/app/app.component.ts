import { Component,ViewChild,ElementRef ,OnInit, ViewEncapsulation} from '@angular/core';
import { DateComponent } from './date/date.component';
import { Location } from '@angular/common';
import { Observable,Observer,of,from } from 'rxjs';
import { filter, finalize, map } from 'rxjs/operators';

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

  myObservable = from([1,2,3,4,6])
  transform =this.myObservable.pipe(
    finalize(()=>{console.log('finalize')}),
    function test(value){ 
      return value},
    map((value)=>{ return value * 5},
    (value: number)=>{
     return value + 5;
    }),
    filter((value)=>value >= 15),
  ).pipe((value)=>value)
  ngOnInit() :void{
      this.transform.subscribe(value=>{
        console.log(value);
      })
  }
  title = 'angular-store-courses';
}
