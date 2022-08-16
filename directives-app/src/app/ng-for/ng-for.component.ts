import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  names = [
    "Ana",
    "John",
    "Mark",
    "Mariel"
  ];

  cities = [
    { name: "Sao Paulo", state: "SP"},
    { name: "Porto Alegre", state: "RS"},
    { name: "Curitiba", state: "PR"},
    { name: "Rio de Janeiro", state: "RJ"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
