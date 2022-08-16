import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  myStyle = {
    'font-size': "10px",
    'color': 'green'
  };

  constructor() { }

  ngOnInit() {
  }

}
