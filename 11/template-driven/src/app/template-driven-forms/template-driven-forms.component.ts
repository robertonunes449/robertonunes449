import { Component, OnInit } from '@angular/core';

interface Client {
  firstName: string;
  lastName: string;
  birth: Date;
  gender: string;
  street: string;
  city: string;
  state: string;
  phone1: string;
  phone2: string;
}

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {

  client: Client = {
    firstName:"", lastName:"", birth: new Date, gender:"", street:"",
    city:"", state:"", phone1:"", phone2:"" };

    states = ["SP","RJ","PR","RS","ES","MG","AL","AM","AC","GO","MT","MS","RN","MA"];

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.client);
  }

}
