import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.scss']
})
export class TwoWayDataBindingComponent implements OnInit {

  name1: string ="";
  name2: string ="";

  client = {
    firstName: "Jonh",
    lastName: "Wick",
    adress: "",
    age: "0"
  };

  constructor() { }

  ngOnInit(): void {
  }


}
