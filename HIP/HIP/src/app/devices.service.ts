import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Devicelocation } from './devicelocation';
import { DeviceData } from './devicedata';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor(private http: HttpClient) { }

  getAllDevicesData(): Observable<DeviceData[]> {
    return this.http.get<DeviceData[]>('http://localhost:8080/api/device/data').pipe(
      map((response: any[]) => {
        return response.map(item => ({
          id: item.id,
          runtime: item.runtime,
          error: item.error,
          current: item.current,
          voltage: item.voltage
        } as DeviceData));
      })
    );
  }

  getAllDeviceLocations(): Observable<Devicelocation[]> {
    return this.http.get<Devicelocation[]>('http://localhost:8080/api/devices').pipe(
      map((response: any[]) => {
        return response.map(item => ({
          id: item.id,
          name: item.name,
          type: item.type,
          room: item.room,
          photo: item.photo,
          working: item.working
        } as Devicelocation));
      })
    );
  }

  getDeviceById(id: number): Observable<Devicelocation> {
    return this.http.get<Devicelocation>(`http://localhost:8080/api/devices/${id}`).pipe(
      map((response: Devicelocation) =>
      ({
        id: response.id,
        name: response.name,
        type: response.type,
        room: response.room,
        photo: response.photo,
        working: response.working
      } as Devicelocation))
    );
  }

  updateDevice(id: number, device: Devicelocation): Observable<any> {
    return this.http.put<Devicelocation>('http://localhost:8080/api/devices/${id}', device).pipe(
      map((response: Devicelocation) =>
      ({
        id: response.id,
        name: response.name,
        type: response.type,
        room: response.room,
        photo: response.photo,
        working: response.working
      } as Devicelocation))
    );
  }

  createDevice(device: Devicelocation): Observable<Devicelocation> {
    return this.http.post<Devicelocation>('http://localhost:8080/api/devices', device).pipe(
      map((response: Devicelocation) =>
      ({
        id: response.id,
        name: response.name,
        type: response.type,
        room: response.room,
        photo: response.photo,
        working: response.working
      } as Devicelocation))
    );
  }

  deleteDevice(id: number): Observable<Devicelocation> {
    return this.http.delete<Devicelocation>('http://localhost:8080/api/devices/${id}').pipe(
      map((response: Devicelocation) =>
      ({
        id: response.id,
        name: response.name,
        type: response.type,
        room: response.room,
        photo: response.photo,
        working: response.working
      } as Devicelocation))
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
