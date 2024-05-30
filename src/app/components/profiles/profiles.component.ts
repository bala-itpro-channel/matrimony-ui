import { Component } from '@angular/core';
import { SortFilterComponent } from './sort-filter/sort-filter.component';
import { DataViewModule } from 'primeng/dataview';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { UserInfo } from '../../models/registration.model';
import { ProfileService } from './profiles.service';
import { take } from 'rxjs';
import { UtilityService } from '../../utils/utility.service';
import { environment } from '../../../environments/environment';
interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
@Component({
  selector: 'app-profiles',
  standalone: true,
  imports: [
    SortFilterComponent,
    DataViewModule,
    ButtonModule,
    PaginatorModule,
    CommonModule,
  ],
  templateUrl: './profiles.component.html',
  styleUrl: './profiles.component.scss',
})
export class ProfilesComponent {
  paginationContent: any;
  profiles: UserInfo[] = [];
  first: number = 0;
  rows: number = 10;
  totalRecords = 0;
  public baseUrl = environment.apiUrl;

  sortList: any[] | undefined = [
    { name: 'Name', code: 'firstName' },
    { name: 'Date of Birth', code: 'dob' },
    { name: 'Gender', code: 'gender' },
  ];

  sortBy: any = { name: 'Name', code: 'firstname' };

  constructor(
    private service: ProfileService,
    public utilityService: UtilityService
  ) {}

  ngOnInit(): void {
    this.getProfile(this.rows, 0, 'firstName');
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.getProfile(event.rows, event.page, 'firstName');
  }

  sortChanged() {
    this.getProfile(this.rows, 0, this.sortBy?.code);
  }

  getProfile(rows: number, page: number, sortField: string) {
    this.service
      .getProfiles(rows, page, sortField)
      .pipe(take(1))
      .subscribe({
        next: (resp: any) => {
          this.paginationContent = resp;
          this.profiles = this.paginationContent.content || [];
          this.totalRecords = this.paginationContent.totalElements;
          console.log(resp);
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }

  contactProfile(_t14: any) {
    throw new Error('Method not implemented.');
  }
}
