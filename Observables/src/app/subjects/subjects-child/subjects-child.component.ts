import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { DataModel } from 'src/app/datamodel';

@Component({
  selector: 'app-subjects-child',
  templateUrl: './subjects-child.component.html',
  styleUrls: ['./subjects-child.component.css']
})
export class SubjectsChildComponent implements OnInit {
  

  @Input() subject: Subject<DataModel>;
  @Input() name: string;


  public log: string[] = [];
  public connected: boolean = false;
  public subscription: Subscription;

  constructor() { }

  ngOnInit(): void {
  }

  logData(data: DataModel) {
    this.log.push( " Timestamp: " + data.timestamp + " Data: " + data.data);
  }

  connect(){

    this.log.push("Connected!");
    this.connected = true;
    this.subscription = this.subject.subscribe(
      (data: DataModel) => {this.logData(data);},
      (error) => {this.connected = false;},
      () =>  { this.connected = false; this.log.push("Finished");}
    );
  }

  disconnect() {

  }
}
