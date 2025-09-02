import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ImageService {
  constructor(private http: HttpClient) {}
  uploadImage(subsectionId: string, optionId: string, file: File, altText?: string) {
    const fd = new FormData();
    fd.append('file', file);
    if (altText) fd.append('altText', altText);
    return this.http.post(`${environment.apiUrl}/subsections/${subsectionId}/options/${optionId}/images`, fd);
  }
  replaceImage(imageId: string, file: File) {
    const fd = new FormData();
    fd.append('file', file);
    return this.http.put(`${environment.apiUrl}/images/${imageId}`, fd);
  }
  deleteImage(imageId: string) {
    return this.http.delete(`${environment.apiUrl}/images/${imageId}`);
  }
}
