import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceComponent } from './device/device.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { RoutineComponent } from './routine/routine.component';
import { AddRoutineComponent } from './add-routine/add-routine.component';
import { DeviceDataComponent } from './device-data/device-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, //default route (home)
  { path: 'home', component: HomeComponent },
  { path: 'device', component: DeviceComponent },
  { path: 'about', component: AboutComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'device/add-device', component: AddDeviceComponent },
  { path: 'routine/add-routine', component: AddRoutineComponent },
  { path: 'routine', component: RoutineComponent },
  { path: 'device/data', component: DeviceDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
