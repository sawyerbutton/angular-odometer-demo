import {Component, OnDestroy, OnInit} from '@angular/core';
import {OdometerService} from './odometer.service';

@Component({
  selector: 'app-odometer',
  templateUrl: './odometer.component.html',
  styleUrls: ['./odometer.component.css']
})
export class OdometerComponent implements OnInit, OnDestroy {
  public number$: any;
  public number2$: any;
  public number3$: any;
  public number4$: any;
  constructor(
    private service: OdometerService
  ) {
    console.log('Odometer component has been created');
  }

  ngOnInit() {
    this.number$ = this.service.getOdometerData();
    this.number2$ = this.service.getOdometerData2();
    this.number3$ = this.service.getOdometerData3();
    this.number4$ = this.service.getOdometerData4();
  }
  ngOnDestroy() {
    console.log('Odometer component has been destroyed');
  }
}
