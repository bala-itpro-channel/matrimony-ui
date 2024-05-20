import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfo } from '../../models/registration.model';
import { environment } from '../../../environments/environment';
import { LoginRequest } from './signin.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(login: LoginRequest) {
    return this.http.post(`${this.baseUrl}/auth/generateToken`, login, { responseType: 'text' });
  }
}
