import { Component } from '@angular/core';
import { BasicInfoComponent } from '../basic-info/basic-info.component';
import { FormGroupDirective, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserInfo } from '../../../models/registration.model';
import { CheckboxModule } from 'primeng/checkbox';
import { RegistrationService } from '../registration.service';

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

  constructor(public parentForm: FormGroupDirective, private server: RegistrationService) {}

  ngOnInit(): void {
    let dosham = '';
    if (this.parentForm.form.value.moreInfo.dosham !== '') {
      dosham = this.parentForm.form.value.moreInfo.dosham.length && this.parentForm.form.value.moreInfo.dosham
        ?.map((element: any) => {
          return element.code;
        })
        .join(',') || '';
    }
    
    this.userInfo = {
      ...this.parentForm.form.value.basicInfo,
      ...this.parentForm.form.value.moreInfo,
      dosham,
      zodiac: this.parentForm.form.value.basicInfo.zodiac?.value || '',
      star: this.parentForm.form.value.basicInfo.star?.value || '',
    };
  }

  saveProfile() {
    this.server.save(this.userInfo).subscribe((resp: any) => {
      console.log(resp);
    })
  }
}
