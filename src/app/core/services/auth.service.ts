import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'villa15_token';
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, { username, password });
  }
  saveToken(token: string) { localStorage.setItem(this.tokenKey, token); }
  getToken(): string | null { return localStorage.getItem(this.tokenKey); }
  logout() {
    const token = this.getToken();
    if (token) this.http.post(`${environment.apiUrl}/auth/logout`, {}).subscribe(()=>{});
    localStorage.removeItem(this.tokenKey);
  }
}
