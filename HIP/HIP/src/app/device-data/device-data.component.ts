import { Component, Input, OnInit, inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceData } from '../devicedata';
import { DevicesService } from '../devices.service';  

@Component({
  selector: 'HIP-device-data',
  templateUrl: './device-data.component.html',
  styleUrl: './device-data.component.css'
})
export class DeviceDataComponent implements OnInit {

  deviceData: DeviceData[] = [];

  constructor(
    private devicesService: DevicesService
  ) { }

  ngOnInit(): void {
    this.getAllDeviceData();
  }

  getAllDeviceData(): void {
    this.devicesService.getAllDevicesData()
      .subscribe(deviceData => this.deviceData = deviceData);
  }
}
