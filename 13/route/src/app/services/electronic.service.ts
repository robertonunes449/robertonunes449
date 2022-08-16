import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Electronic } from '../models/electronic';

@Injectable({
  providedIn: 'root'
})
export class ElectronicService {

  private electronicSubject$: BehaviorSubject<Electronic[]> = new BehaviorSubject<Electronic[]>([]);
  public electronics$ = this.electronicSubject$.asObservable();
  constructor() { 
    timer(1000)
      .subscribe (() => {
        this.electronicSubject$.next([
          { name: "Headphone", brand: "Bose", price: 200, description: "Noise cancelling" },
          { name: "Portable HD", brand: "Samsumg", price: 300, description: "2TB Hard Disk" },
          { name: "Monitor 23\"", brand: "AOC", price: 1200, description: "HDMI/VGA" },
          { name: "Processador i7-8700", brand: "Intel", price: 1600, description: "12 MB Cache" },
          { name: "Mouse Wireless", brand: "Logitech", price: 200, description: "For Gamers" },
        ])
      })
  }

  get(i: number): Observable<Electronic> {
    return this.electronics$.pipe(
      map(electronics => (i>=0 && i<electronics.length) ? electronics[i] : null),
      delay(1000)
    )
  }
}
