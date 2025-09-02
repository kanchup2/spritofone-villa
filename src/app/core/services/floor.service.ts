import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class FloorService {
  constructor(private http: HttpClient) {}
  getFloor(floorId: string) {
    return this.http.get(`${environment.apiUrl}/floors/${floorId}`);
  }
  getFloorSummary(floorId: string) {
    return this.http.get(`${environment.apiUrl}/floors/${floorId}/summary`);
  }
}
