import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfo } from '../../models/registration.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProfiles(pagesize: number = 10, pagenumber: number = 0, sortfield: string = 'firstName'): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/api/users/${pagesize}/${pagenumber}/${sortfield}`
    );
  }
}
