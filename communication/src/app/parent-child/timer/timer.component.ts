import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  public miliseconds: number= 0;
  public interval: any;
  public running = false;
  constructor() { }

  ngOnInit(): void {
  }
  
  start() {
    if (!this.running) {
    this.interval = setInterval (()=>{
      this.miliseconds += 50;
    }, 50);
    this.running = true;
  }
  }

  stop() {
    if (this.running) {
      clearInterval(this.interval);
      this.running = false;
    }
  }

  clear() {
      this.miliseconds = 0;
  }

  public round(n :number) : number {
    return Math.round(n);
  }
}
