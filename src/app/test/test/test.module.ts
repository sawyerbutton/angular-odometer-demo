import {NgModule, OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import {TestRoutingModule} from './test-routing.module';
import { TestChildComponent } from './test-child/test-child.component';
import {TestService} from './test.service';

@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule
  ],
  declarations: [TestComponent, TestChildComponent],
  providers: [TestService]
})
export class TestModule implements OnDestroy {
  constructor() {
    console.log('TestModule has been created');
  }
  ngOnDestroy() {
    console.log('TestModule has been destroyed');
  }
}
