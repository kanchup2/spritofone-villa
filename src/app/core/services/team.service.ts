import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TeamService {
  constructor(private http: HttpClient) {}
  getTeam() { return this.http.get(`${environment.apiUrl}/team`); }
  addMember(payload:any) { return this.http.post(`${environment.apiUrl}/team`, payload); }
  updateMember(id:string, payload:any){ return this.http.put(`${environment.apiUrl}/team/${id}`, payload); }
  removeMember(id:string){ return this.http.delete(`${environment.apiUrl}/team/${id}`); }
}
