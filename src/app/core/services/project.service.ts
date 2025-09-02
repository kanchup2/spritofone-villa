import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  constructor(private http: HttpClient) {}
  getProject(projectId: string = 'villa15') {
    return this.http.get(`${environment.apiUrl}/projects/${projectId}`);
  }
}
