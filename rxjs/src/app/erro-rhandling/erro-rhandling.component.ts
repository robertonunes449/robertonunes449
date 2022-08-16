import { Component, OnInit } from '@angular/core';
import { Observable, of, throwError, timer } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { tap } from 'rxjs/internal/operators/tap';
import { catchError, timeout } from 'rxjs/operators';

@Component({
  selector: 'app-erro-rhandling',
  templateUrl: './erro-rhandling.component.html',
  styleUrls: ['./erro-rhandling.component.css']
})
export class ErroRHandlingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  startTest() {
    let obj: Observable<any> = new Observable((observer)=>{
      for(let i=0;i<10;i++) {
        if (i==7)
        observer.error(`An error occurred when i= ${i}`);
        else
          observer.next(i);
      }
    });
    obj
    .pipe(
      map(i=>i*10),
      tap(i=>console.log('Before error handling: ' + i)),
      catchError(error => {
        console.error(error);
        //return of(0);
        return throwError('throwError: Error');
      })
      
    )
    /*
    .subscribe(
      i => console.log('Normal output: ' + i),
      err => console.log(err),
      () => console.log('Completed!')
    ); */

    let obj2: Observable<any> = new Observable((observer) => {
      timer(2000).subscribe((n) => observer.next(1000));
      timer(2500).subscribe((n) => observer.complete());
    });
    obj2
    .pipe(
      timeout(2600)
    )
    .subscribe(
      i => console.log('Normal output: ' + i),
      err => console.log(err),
      () => console.log('Completed!')
    )
  }

}
