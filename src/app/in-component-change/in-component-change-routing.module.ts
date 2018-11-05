import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InComponentChangeComponent} from './in-component-change.component';

const routes: Routes = [
  {path: '', component: InComponentChangeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InComponentChangeRoutingModule { }
