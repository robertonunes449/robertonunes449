import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  //@ViewChild('form', {static:false}) f: ElementRef<null>;

  usuario: any = {
    nome: '',
    email:''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
    console.log(this.usuario);
  }
}
