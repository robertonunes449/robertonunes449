import { Component, Input, OnInit } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

 @Input() name: string;
 @Input()lastname: string;
 @Input()age: number;

 clients: Client[];

  constructor() { 
    this.clients = [
      {id:1, name: "Bob", age:30},
      {id:2, name: "Guy", age:30},
      {id:3, name: "Luna", age:30},
      {id:4, name: "Jonh", age:30},
      {id:5, name: "Bella", age:30},
      {id:6, name: "Bilada", age:30},
    ];

  }

  ngOnInit(): void {
  }

}
