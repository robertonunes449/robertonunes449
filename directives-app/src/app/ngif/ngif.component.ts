import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  showName: boolean = false;
  showAddress: boolean = false;
  showPhone: boolean = false;
  showAge: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
