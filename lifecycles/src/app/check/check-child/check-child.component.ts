import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-child',
  templateUrl: './check-child.component.html',
  styleUrls: ['./check-child.component.css']
})
export class CheckChildComponent implements OnInit {

 

  constructor() { 
    console.log("     CheckChild: constructor");
  }

  ngOnInit(): void {
    console.log("     CheckChild: ngOnInit");
  }

  ngOnchanges(){

    console.log("     CheckChild: ngOnchanges");
  }
  ngDoCheck(){
    console.log("     CheckChild: ngDoCheck");

  }
  ngAfterContentInit(){
    console.log("     CheckChild: ngAfterContentInit");

  }
  ngAfterContentChecked(){
    console.log("     CheckChild: ngAfterContentChecked");

  }

  ngOnDestroy(){
    console.log("     CheckChild: ngOnDestroy");

  }

}
