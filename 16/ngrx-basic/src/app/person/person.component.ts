import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person: Person;
  @Output() delete: EventEmitter<Person> = new EventEmitter<Person>();
  @Output() update: EventEmitter<Person> = new EventEmitter<Person>();

  constructor() { }

  ngOnInit() {
  }

}
