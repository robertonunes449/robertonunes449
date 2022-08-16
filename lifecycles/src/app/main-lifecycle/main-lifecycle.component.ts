import { Component, OnInit } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-main-lifecycle',
  templateUrl: './main-lifecycle.component.html',
  styleUrls: ['./main-lifecycle.component.css']
})
export class MainLifecycleComponent implements OnInit {
  
  public foods: string[] = ["rise", "beans", "pizza"]; 
  public clients: Client[] = [];
  public name: string;
  public age: number;
  public food: string;
  public editClient: number = -1 ;
  public randomNumber: number;
   
  constructor() { 
    this.ganerateRandomNumber();
  }

  ganerateRandomNumber() {
    this.randomNumber = Math.round(Math.random()*1000);
  }

  ngOnInit(): void {
  }
  
  save() {
    if (this.editClient == -1) {
    this.clients.push({name: this.name, age: this.age, food: this.food});
  }
  else{
    this.clients[this.editClient].age = this.age;
    this.clients[this.editClient].name = this.name;
    this.clients[this.editClient].food = this.food;
    this.editClient = -1;
  }
  this.age = null;
  this.name = "";
  this.food = "";
}

remove(i: number) {
  this.clients.splice(i, 1);

}

edit(i: number) {
  this.age = this.clients[i].age;
  this.name = this.clients[i].name;
  this.food = this.clients[i].food;
  this.editClient = i;
  
}

}

