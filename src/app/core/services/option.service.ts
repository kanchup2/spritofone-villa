import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class OptionService {
  constructor(private http: HttpClient) {}
  updateOption(optionId: string, payload: any) {
    return this.http.put(`${environment.apiUrl}/options/${optionId}`, payload);
  }
  finalize(subsectionId: string, optionId: string) {
    return this.http.post(`${environment.apiUrl}/subsections/${subsectionId}/finalize`, { optionId });
  }
}
