import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'test',
    pathMatch: 'full'
  },
  {// odometer
    path: 'test',
    loadChildren: './test/test/test.module#TestModule',
    data: {name: 'test'}
  },
  {// test
    path: 'odometer',
    loadChildren: './odometer-feature/odometer/odometer.module#OdometerModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
