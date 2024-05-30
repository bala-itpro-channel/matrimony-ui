import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfo } from '../../models/registration.model';
import { environment } from './../../../environments/environment';
import { Observable, switchMap, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private baseUrl = environment.apiUrl;
  public imageFile!: File;

  constructor(private http: HttpClient) {}

  save(userInfo: UserInfo) {
    return this.http
      .post<UserInfo>(`${this.baseUrl}/auth/addNewUser`, userInfo)
      .pipe(
        take(1),
        switchMap((resp: any) => {
          const userId = resp.id;
          const formData = new FormData();
          formData.append('imageFile', this.imageFile);
          // formData.append('userId', userId.toString());

          return this.http.post<UserInfo>(
            `${this.baseUrl}/api/upload/${userId}`,
            formData
          );
          // return this.updateImage(resp.id);
        })
      );
  }

  updateImage(userId: number): Observable<any> {
    const formData = new FormData();
    formData.append('imageFile', this.imageFile);
    // formData.append('userId', userId.toString());

    return this.http.post<UserInfo>(
      `${this.baseUrl}/api/upload/${userId}`,
      formData,
    );
  }

  // updateImage(userId: number): Observable<any> {
  //   const formData = new FormData();
  //   formData.append('imageFile', this.imageFile);
  //   // formData.append('userId', userId.toString());

  //   return this.http.post<UserInfo>(
  //     `${this.baseUrl}/api/upload/${userId}`,
  //     formData,
  //     {
  //       reportProgress: true,
  //       observe: 'events',
  //     }
  //   );
  // }
}
