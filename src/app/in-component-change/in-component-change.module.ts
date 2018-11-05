import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InComponentChangeComponent } from './in-component-change.component';
import {InComponentChangeRoutingModule} from './in-component-change-routing.module';
import { InComponentChangeChildComponent } from './in-component-change-child/in-component-change-child.component';

@NgModule({
  imports: [
    CommonModule,
    InComponentChangeRoutingModule
  ],
  declarations: [InComponentChangeComponent, InComponentChangeChildComponent]
})
export class InComponentChangeModule { }
