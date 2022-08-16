import { Component, OnInit } from '@angular/core';
import { ConnectableObservable, observable, Observable, Observer, Subject } from 'rxjs';
import { publish } from 'rxjs/operators';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-hot-observables',
  templateUrl: './hot-observables.component.html',
  styleUrls: ['./hot-observables.component.css']
})
export class HotObservablesComponent implements OnInit {

  n: number = 0;
  n1: number = 0;
  n2: number = 0;
  s1: string = '';
  s2: string = '';

  myObservable: Observable<number>;

  constructor() { }

  ngOnInit(): void {
    this.myObservable = new Observable(
      (observer:Observer<number>) => {
        let i : number = 0 ;
        console.log('%c Observable Created' , 'background:#cccccc; color: #ff0000;');
        setInterval (() =>{
          i++;
          console.log('%c i = ' + i , ' Observable Created', 'background: #cccccc;', ' color: #ff0000;');
          (i == 100) ? observer.complete() : observer.next(i);
        },1000)
      }
    )
    //this.usingSubjects();
    //this.usingPublish();
    this.usingShare()
  } 

  usingShare() {
    const multicasted = this.myObservable.pipe(share())

      //subscribe 1
      this.s1 = 'waiting for interval...';
      setTimeout(()=> {
        multicasted.subscribe((_n) => {
          this.n1 = _n;
          this.s1 = 'OK';
        });
      },5000);
  
      //subscribe 2
      this.s2 = 'waiting for interval...';
      setTimeout(()=> {
        multicasted.subscribe((_n) => {
          this.n2 = _n;
          this.s2 = 'OK';
        });
      },10000);
  }

  usingPublish() {
    const multicasted: ConnectableObservable<number> = this.myObservable
    .pipe(publish()) as ConnectableObservable<number>;
    multicasted.connect(); 

      //subscribe 1
      this.s1 = 'waiting for interval...';
      setTimeout(()=> {
        multicasted.subscribe((_n) => {
          this.n1 = _n;
          this.s1 = 'OK';
        });
      },5000);
  
      //subscribe 2
      this.s2 = 'waiting for interval...';
      setTimeout(()=> {
        multicasted.subscribe((_n) => {
          this.n2 = _n;
          this.s2 = 'OK';
        });
      },10000);
  }

  usingSubjects() {
    const subject  = new Subject<number>();
    this.myObservable.subscribe(subject);


    //subscribe 1
    this.s1 = 'waiting for interval...';
    setTimeout(()=> {
      subject.subscribe((_n) => {
        this.n1 = _n;
        this.s1 = 'OK';
      });
    },5000);

    //subscribe 2
    this.s2 = 'waiting for interval...';
    setTimeout(()=> {
      subject.subscribe((_n) => {
        this.n2 = _n;
        this.s2 = 'OK';
      });
    },10000);


  }


}

