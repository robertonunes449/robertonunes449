import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  @ViewChild(TimerComponent)
  public mytimer: TimerComponent;

  @ViewChild("myP")
  public myp: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  start() {
    this.mytimer.start();
  }
   
  stop() {
    this.mytimer.stop();
  }

  clear() {
    this.mytimer.clear();
  }

  ngAfterViewInit () {
    console.log(this.myp); 
  }
}
