import {ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestChildComponent implements OnInit, OnChanges, DoCheck {
  @Input() value$: number;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(simpleChanges: SimpleChanges) {
    // simpleChanges is a object which includes multiple @Input Properties
    const previousValue = simpleChanges['value$'].previousValue;
    const currentValue = simpleChanges['value$'].currentValue;
    const isFirstChange = simpleChanges['value$'].isFirstChange();
    const firstChange = simpleChanges['value$'].firstChange;
    const str1 = `previousValue is ${previousValue}, currentValue is ${currentValue},`;
    const str2 = `isFirstChange is ${isFirstChange}, firstChange is ${firstChange}`;
    console.log(str1 + str2);
  }
  ngDoCheck() {
    console.log('ngDoCheck lifecycle hook triggered');
  }
}
