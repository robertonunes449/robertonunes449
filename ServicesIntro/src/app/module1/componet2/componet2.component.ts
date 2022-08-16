import { Component, OnInit } from '@angular/core';
import { Service2 } from 'src/app/service2.service';
import { service1 } from '../service1.service';

@Component({
  selector: 'app-componet2',
  //providers: [service1],
  templateUrl: './componet2.component.html',
  styleUrls: ['./componet2.component.css']
})
export class Componet2Component implements OnInit {

  num = 0;
  text = "";
  constructor(private myService: service1,
    private myService2: Service2) { }

  ngOnInit(): void {
    this.num = this.myService.num;
    this.text = this.myService2.text;
  }

}
