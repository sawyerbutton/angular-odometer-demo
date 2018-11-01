import {Component, OnDestroy, OnInit} from '@angular/core';
import {TestService} from './test.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnDestroy {
  passingByvalue$: Observable<number>;
  constructor(
    private service: TestService
  ) {
    console.log('Test component has been created');
  }

  ngOnInit() {
    this.passingByvalue$ = this.service.getTestData();
  }
  ngOnDestroy() {
    console.log('Test component has been destroyed');
  }
}
