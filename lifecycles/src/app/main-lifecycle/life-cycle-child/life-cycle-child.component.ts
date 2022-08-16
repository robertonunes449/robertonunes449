import { AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

export interface LifeCycleEvent {
  id: number;
  name: string;
  color: string;
}

@Component({
  selector: 'app-life-cycle-child',
  templateUrl: './life-cycle-child.component.html',
  styleUrls: ['./life-cycle-child.component.css']
})

export class LifeCycleChildComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit, AfterViewInit {

  @Input() name: string;
  @Input() age: number;
  @Input() food: string;

  public events: LifeCycleEvent [] = [];
  nextEventId: number = 0;
  colors : string [] = ["accent", "warn", "primary"];
  public intervalRef = null;
  
  
  constructor() {
    console.log(this.name + " - Constructor ");
    this.newEvent("constructor");
    this.intervalRef = setInterval(()=> { console.log('interval')}, 2000);
  }

  ngOnInit() {
    console.log(this.name + " - ngOnInit ");
    this.newEvent("ngOnInit");
  }

  ngOnChanges(changes : SimpleChanges) {
    console.log(changes);
    console.log(this.name + " - ngOnChanges ");
    this.newEvent("ngOnChanges");
    /*for (let propName in changes) {
      console.log(propName);
    }*/ 
    /*
    if (changes['name']) {
      console.log("old name: " + changes['name'].previousValue);
    }*/
  }

  ngAfterContentInit() {
    console.log(this.name + " - ngAfterContentInit ");
    this.newEvent("ngAfterContentInit");
  }

  ngAfterViewInit() {
    console.log(this.name + " - ngAfterViewInit ");
    this.newEvent("ngAfterViewInit");
  }

  ngOnDestroy() {
    console.log(this.name + " - ngOnDestroy ");
    this.newEvent("ngOnDestroy");
    clearInterval(this.intervalRef);
  }

  newEvent(name: string) {
    let id = this.nextEventId++;
    this.events.push({
      id: id,
      color: this.colors[id %this.colors.length],
      name: name
    });
    setTimeout(() => {
      let idx = this.events.findIndex((e) => e.id==id)
      if (idx >= 0) 
        this.events.splice(idx, 1);
      
    }, 3000 + this.events.length*2000);

  }

}
