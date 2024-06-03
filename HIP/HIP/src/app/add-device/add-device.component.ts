import { Component, OnInit, inject } from '@angular/core';
import { Devicelocation } from '../devicelocation';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'HIP-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css'],
})
export class AddDeviceComponent implements OnInit {

  devices: Devicelocation[] = []

  constructor(private devicesService: DevicesService) { }

  ngOnInit(): void {
    this.getDevices();
  }

  addDevice(name: string, type: string, room: string, photo: string, working: boolean): void {
    name = name.trim();
    type = type.trim();
    room = room.trim();
    photo = photo.trim();
    if (!name) { return; }
    this.devicesService.createDevice({ name, type, room, photo, working } as Devicelocation)
      .subscribe(device => {
        this.devices.push(device);
      });
  }

  getDevices(): void {
    this.devicesService.getAllDeviceLocations()
      .subscribe(devices => this.devices = devices);
  }
}
