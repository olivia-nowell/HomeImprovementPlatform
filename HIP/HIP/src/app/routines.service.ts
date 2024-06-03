import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routine } from './routine';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutinesService {

  constructor(private http: HttpClient) { }

  getAllRoutines(): Observable<Routine[]> {
    return this.http.get<Routine[]>('https://localhost:7083/api/routines').pipe(
      map((response: any[]) => {
        return response.map(item => ({
          id: item.id,
          name: item.name,
          trigger: item.trigger,
          actions: item.actions,
          schedule: item.schedule,
          devices: item.devices,
          status: item.status
        } as Routine));
      })
    );
  }

  getRoutineById(id: number): Observable<Routine> {
    return this.http.get<Routine>(`https://localhost:7083/api/routines/${id}`).pipe(
      map((response: Routine) =>
      ({
        id: response.id,
        name: response.name,
        trigger: response.trigger,
        actions: response.actions,
        schedule: response.schedule,
        devices: response.devices,
        status: response.status
      } as Routine))
    );
  }

  updateRoutine(id: number, routine: Routine): Observable<any> {
    return this.http.put<Routine>('https://localhost:7083/api/routines/${id}', routine).pipe(
      map((response: Routine) =>
      ({
        id: response.id,
        name: response.name,
        trigger: response.trigger,
        actions: response.actions,
        schedule: response.schedule,
        devices: response.devices,
        status: response.status
      } as Routine))
    );
  }

  createRoutine(routine: Routine): Observable<Routine> {
    return this.http.post<Routine>('https://localhost:7083/api/routines', routine).pipe(
      map((response: Routine) =>
      ({
        id: response.id,
        name: response.name,
        trigger: response.trigger,
        actions: response.actions,
        schedule: response.schedule,
        devices: response.devices,
        status: response.status
      } as Routine))
    );
  }

  deleteRoutine(id: number): Observable<Routine> {
    return this.http.delete<Routine>('https://localhost:7083/api/routines/${id}').pipe(
      map((response: Routine) =>
      ({
        id: response.id,
        name: response.name,
        trigger: response.trigger,
        actions: response.actions,
        schedule: response.schedule,
        devices: response.devices,
        status: response.status
      } as Routine))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



}
