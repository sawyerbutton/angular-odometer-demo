import {NgModule, NgModuleRef, OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OdometerComponent } from './odometer.component';
import {OdometerRoutingModule} from './odometer-routing.module';
import { Ng2OdometerModule} from 'ng2-odometer';
import {OdometerService} from './odometer.service';

@NgModule({
  imports: [
    CommonModule,
    OdometerRoutingModule,
    Ng2OdometerModule.forRoot()
  ],
  declarations: [OdometerComponent],
  providers: [OdometerService]
})
export class OdometerModule implements OnDestroy {
  constructor(
    private lazy: NgModuleRef<OdometerModule>,
  ) {
    console.log('OdometerModule has been created');
  }
  ngOnDestroy() {
    console.log('OdometerModule has been destroyed');
    this.lazy.destroy();
  }
}
