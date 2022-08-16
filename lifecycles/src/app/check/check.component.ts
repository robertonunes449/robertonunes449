import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  @Input() test: string;

  public name: string = ""; 
  public age: number = 0;

  constructor() { 
    console.log("constructor");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngOnchanges(){

    console.log("ngOnchanges");
  }
  ngDoCheck(){
    console.log("ngDoCheck");

  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit");

  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked");

  }

  ngOnDestroy(){
    console.log("ngOnDestroy");

  }
}
