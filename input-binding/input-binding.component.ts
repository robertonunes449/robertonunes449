import { Component, Input, OnInit } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

    @Input('firstname') name: string;

    @Input() lastname: string;

    @Input() age: number;

    clients: Client [];

  constructor() { 
    this.clients = [
      {id:1, name:"Bob", age:30},
      {id:2, name:"Maria", age:56},
      {id:3, name:"Bella", age:25},
      {id:4, name:"Beto", age:30},
      {id:5, name:"Nina", age:45}
    ];

  }

  ngOnInit(): void {
  }

}
