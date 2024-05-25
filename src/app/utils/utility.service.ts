import { Injectable } from '@angular/core';
import moment from 'moment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {

  calAge(dob: string, yearOnly: boolean = true): string {
    var diff = moment(dob.substring(0, 10)).diff(moment(), 'milliseconds');
    var duration = moment.duration(diff);

    return yearOnly ? duration.humanize() : duration.humanize() + ' and ' + Math.floor(-1 * (duration.asMonths() % 12)) + ' month(s)';
  }

  isAuthenticated(): Observable<boolean> {
    return of(!!localStorage.getItem("token"));
  }
}
