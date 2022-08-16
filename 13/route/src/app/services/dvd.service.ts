import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Dvd } from '../models/dvd';

@Injectable({
  providedIn: 'root'
})
export class DvdService {

  private dvdSubject$: BehaviorSubject<Dvd[]> = new BehaviorSubject<Dvd[]>([]);
  public dvds$ = this.dvdSubject$.asObservable();
  
  constructor() { 
    timer(2000)
      .subscribe( () =>  this.dvdSubject$.next([
          { title: "DVD - Beegees", year: 2016, genre: "Music"},
          { title: "The Wind", year: 2010, genre: "Movie"},
        ]))
  }

  add(d: Dvd) {
    this.dvdSubject$.getValue().push(d);
  }

  remove(i: number) {
    let dvds = this.dvdSubject$.getValue();
    if (i>=0 && i<dvds.length)
      dvds.splice(i, 1);
  }

  get(i: number): Observable<Dvd> {
    return this.dvds$.pipe(
      map(dvds => (i>=0 && i<dvds.length) ? dvds[i] : null),
      delay(1000)
    )
  }
}
