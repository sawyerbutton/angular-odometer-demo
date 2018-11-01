import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

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
}
