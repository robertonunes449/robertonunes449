import { Component, OnInit } from '@angular/core';
import { Service2 } from 'src/app/service2.service';
import { service1 } from '../service1.service';

@Component({
  selector: 'app-component',
  //providers: [service1],
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  num = 0;
  text = "";
  constructor(private myService: service1,
    private myService2: Service2) { }

  ngOnInit(): void {
    this.num = this.myService.num;
    this.text = this.myService2.text;
  }

}
