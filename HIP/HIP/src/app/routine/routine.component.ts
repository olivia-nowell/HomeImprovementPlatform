import { Component, OnInit } from '@angular/core';
import { Routine } from '../routine';
import { RoutinesService } from '../routines.service';


@Component({
  selector: 'HIP-routine',
  templateUrl: './routine.component.html',
  styleUrl: './routine.component.css'
})
export class RoutineComponent implements OnInit { //javascript class
  routines: Routine[] = []

  constructor(private routinesService: RoutinesService) { }

  ngOnInit(): void {
    this.getRoutines();
  }

  getRoutines(): void {
    this.routinesService.getAllRoutines()
      .subscribe(routines => this.routines = routines);
  }



}
