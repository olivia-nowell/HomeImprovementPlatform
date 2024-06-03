import { Component, OnInit, inject } from '@angular/core';
import { Routine } from '../routine';
import { RoutinesService } from '../routines.service';

@Component({
  selector: 'HIP-add-routine',
  templateUrl: './add-routine.component.html',
  styleUrls: ['./add-routine.component.css'],
})
export class AddRoutineComponent implements OnInit {

  routines: Routine[] = []

  constructor(private routinesService: RoutinesService) { }

  ngOnInit(): void {
    this.getRoutines();
  }

  addRoutine(name: string, trigger: string, actions: string, schedule: string, devices: string, status: string): void {
    name = name.trim();
    trigger = trigger.trim();
    actions = actions.trim();
    schedule = schedule.trim();
    devices = devices.trim();
    status = status.trim();
    if (!name) { return; }
    this.routinesService.createRoutine({ name, trigger, actions, schedule, devices, status } as Routine)
      .subscribe(routine => {
        this.routines.push(routine);
      });
  }

  getRoutines(): void {
    this.routinesService.getAllRoutines()
      .subscribe(routines => this.routines = routines);
  }
}
