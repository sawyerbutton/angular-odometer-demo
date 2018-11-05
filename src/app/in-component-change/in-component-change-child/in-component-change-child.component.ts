import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-in-component-change-child',
  templateUrl: './in-component-change-child.component.html',
  styleUrls: ['./in-component-change-child.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class InComponentChangeChildComponent implements OnInit, OnChanges {
  @Input() value: any;
  curr: any;
  prev: any
  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
   this.curr = changes['value'].currentValue;
   this.prev = changes['value'].previousValue;
   if (this.curr !== this.prev) {
     console.log('value changed');
     this.cd.markForCheck();
   }
  }
}
