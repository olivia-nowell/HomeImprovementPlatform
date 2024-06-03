import { Routes } from '@angular/router';
import { DeviceComponent } from './device/device.component';
import { DetailsComponent } from './details/details.component';
import { RoutineComponent } from './routine/routine.component';
import { DeviceDataComponent } from './device-data/device-data.component';
const routeConfig: Routes = [
  {
    path: '',
    component: DeviceComponent,
    title: 'Home page'
  },
  {
    path: '',
    component: RoutineComponent,
    title: 'All routine details'
  },
  {
    path: '',
    component: DeviceDataComponent,
    title: 'All device data details'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Device details'
  }
];

export default routeConfig;


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
