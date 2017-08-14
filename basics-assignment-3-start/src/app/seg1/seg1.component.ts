import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seg1',
  templateUrl: './seg1.component.html',
  styleUrls: ['./seg1.component.css']
})
export class Seg1Component implements OnInit {
  buttonLog: string []= [''];
  pDisplay = false;

  constructor() { }

  ngOnInit() {
  }

  setDisplay() {       
    this.pDisplay = !this.pDisplay;
    // return this.pDisplay;
  }


  setLog() {
    this.buttonLog.push('Button Pressed @ ' + Date().toString());
  }


}
