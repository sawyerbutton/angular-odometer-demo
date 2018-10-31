import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OdometerComponent} from './odometer.component';

const routes: Routes = [
  {path: '', component: OdometerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OdometerRoutingModule { }
