import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnDestroy {

  constructor() {
    console.log('Test component has been created');
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    console.log('Test component has been destroyed');
  }
}
