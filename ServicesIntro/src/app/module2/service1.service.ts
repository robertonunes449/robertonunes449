import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1 {
  public num = 0;

  constructor() {
    this.num = Math.round(Math.random()*1000);
   }
}
