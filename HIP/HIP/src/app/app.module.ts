import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AddDeviceComponent } from './add-device/add-device.component';
import { RoutineComponent } from './routine/routine.component';
import { AddRoutineComponent } from './add-routine/add-routine.component';
import { DeviceDataComponent } from './device-data/device-data.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeviceComponent,
    HeaderComponent,
    FooterComponent,
    AddDeviceComponent,
    RoutineComponent,
    AddRoutineComponent,
    DeviceDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
