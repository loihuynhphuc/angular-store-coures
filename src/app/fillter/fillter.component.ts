import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fillter',
  templateUrl: './fillter.component.html',
  styleUrls: ['./fillter.component.css']
})
export class FillterComponent implements OnInit {
 @Input() all = 0;
 @Input() premium = 0;
 @Input() free = 0;

 @Output() fillterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();

  selectButtonValue: string ='all';
  constructor() { 

  }

  ngOnInit(): void {
  }
  onRadioButtonChanged(){
    this.fillterRadioButtonChanged.emit(this.selectButtonValue);
  }
}
