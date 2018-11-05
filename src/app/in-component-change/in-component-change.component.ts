import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-in-component-change',
  templateUrl: './in-component-change.component.html',
  styleUrls: ['./in-component-change.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InComponentChangeComponent implements OnInit {
  value: any;
  constructor() { }

  ngOnInit() {
    this.value = {id: 1, name: 'sawyer', action: 'presentation'};
  }
  modify() {
    this.value.name = this.value.name === 'sawyer' ? 'button' : 'sawyer';
  }
}
