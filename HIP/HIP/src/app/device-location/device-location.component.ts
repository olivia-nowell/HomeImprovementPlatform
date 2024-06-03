import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Devicelocation } from '../devicelocation';
import { RouterLink, RouterOutlet } from '@angular/router';

//DeviceLocationComponent template has a
//DeviceLocation property to receive input.
@Component({
  selector: 'HIP-device-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet
  ],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="deviceLocation.photo" alt="">
    <h2 class="listing-heading">{{ deviceLocation.name }}</h2>
    <p class="listing-location">{{ deviceLocation.type}}, {{deviceLocation.room }}</p>
    <a [routerLink]="['/details', deviceLocation.id]"> More Info</a>
  </section>
  `,
  styleUrl: './device-location.component.css'
})
export class DeviceLocationComponent {
  @Input() deviceLocation!: Devicelocation;
}
