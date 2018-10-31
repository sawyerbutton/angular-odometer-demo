import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OdometerService {

  constructor() { }
  getOdometerData() {
    return Observable.create(observer => {
      observer.next(150);
      setTimeout(function () {
        observer.next(200);
      }, 3000);
      setTimeout(function () {
        observer.next(300);
      }, 5000);
    });
  }
  getOdometerData2() {
    return Observable.create(observer => {
      observer.next(300);
      setTimeout(function () {
        observer.next(500);
      }, 3000);
      setTimeout(function () {
        observer.next(700);
      }, 5000);
    });
  }
  getOdometerData3() {
    return Observable.create(observer => {
      observer.next(700);
      setTimeout(function () {
        observer.next(900);
      }, 3000);
      setTimeout(function () {
        observer.next(1100);
      }, 5000);
    });
  }
  getOdometerData4() {
    return Observable.create(observer => {
      observer.next(1100);
      setTimeout(function () {
        observer.next(1200);
      }, 3000);
      setTimeout(function () {
        observer.next(1300);
      }, 5000);
    });
  }
}
