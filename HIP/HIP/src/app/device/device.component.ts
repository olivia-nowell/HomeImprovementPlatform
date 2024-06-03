import { Component, OnInit } from '@angular/core';
import { Devicelocation } from '../devicelocation';
import { DevicesService } from '../devices.service';



//Add component decorator allows component metadata to be added to a class
@Component({
  selector: 'HIP-device',
  templateUrl: './device.component.html',
  styleUrl: './device.component.css'
})
export class DeviceComponent implements OnInit { //javascript class
  devices: Devicelocation[] = []

  constructor(private devicesService: DevicesService) { }

  ngOnInit(): void {
    this.getDevices();
  }

  getDevices(): void {
    this.devicesService.getAllDeviceLocations()
      .subscribe(devices => this.devices = devices);
  }



  }
  
