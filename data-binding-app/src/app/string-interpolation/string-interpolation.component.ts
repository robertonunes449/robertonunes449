import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.scss']
})
export class StringInterpolationComponent implements OnInit {

  firstname = "john";
  person = {
    firstname : "John",
    lastname : "Wick",
    age : "400",
    adress : "terra do nunca"
  }
  
  
  constructor() { }

   

  ngOnInit(): void {
  }

}
