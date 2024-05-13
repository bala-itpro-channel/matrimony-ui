import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfo } from '../../models/registration.model';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  save(userInfo: UserInfo) {
    return this.http.post<UserInfo>(`${this.baseUrl}/auth/addNewUser`, userInfo);
  }
}
