import { Component } from '@angular/core';
import { BasicInfoComponent } from '../basic-info/basic-info.component';
import { FormGroupDirective, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserInfo } from '../../../models/registration.model';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-review-info',
  standalone: true,
  imports: [BasicInfoComponent, CommonModule, FormsModule, CheckboxModule],
  templateUrl: './review-info.component.html',
  styleUrl: './review-info.component.scss',
})
export class ReviewInfoComponent {
  termsAndConditions: boolean = false;
  userInfo!: UserInfo;

  constructor(public parentForm: FormGroupDirective) {}

  ngOnInit(): void {
    this.userInfo = {
      ...this.parentForm.form.value.basicInfo,
      ...this.parentForm.form.value.moreInfo,
    };
  }
}
