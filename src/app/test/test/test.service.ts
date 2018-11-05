import { Injectable } from '@angular/core';
import {interval, Observable, of, timer} from 'rxjs';
import {delay, exhaustMap, flatMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  getTestData() {
    return Observable.create(observer => {
      observer.next(1);
      setTimeout(function () {
        observer.next(2);
      }, 3000);
      setTimeout(function () {
        observer.next(3);
      }, 5000);
    });
  }
  getRepeatCallData() {
    return timer(0, 3000).pipe(exhaustMap(this.doRequest));
  }
  doRequest() {
    if (Math.random() < 0.5) {
      console.log('发送请求1');
      return of('发送请求1');
    } else {
      console.log('发送请求2');
      return of('发送请求2');
    }
  }
  getRepeatCallDataInOtherWay() {
    return interval(3000)
      .pipe(
        flatMap(() => this.doRequest())
      );
  }
}
