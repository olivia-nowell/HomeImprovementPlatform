import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DevicesService } from '../devices.service';
import { Devicelocation } from '../devicelocation';
@Component({
  selector: 'HIP-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {

  deviceLocation!: Devicelocation;

  constructor(
    private route: ActivatedRoute = inject(ActivatedRoute),
    private devicesService: DevicesService
  ) { }

  ngOnInit(): void {
    this.getDevice();
  }

  getDevice(): void {
    const deviceLocationId = Number(this.route.snapshot.params['id']);
    this.devicesService.getDeviceById(deviceLocationId)
      .subscribe(deviceLocation => this.deviceLocation = deviceLocation);
  }

}
