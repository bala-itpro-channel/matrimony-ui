import { Component } from '@angular/core';
import { BasicInfoComponent } from '../basic-info/basic-info.component';
import { FormGroupDirective, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserInfo } from '../../../models/registration.model';
import { CheckboxModule } from 'primeng/checkbox';
import { RegistrationService } from '../registration.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-info',
  standalone: true,
  imports: [
    BasicInfoComponent,
    CommonModule,
    FormsModule,
    CheckboxModule,
    ToastModule,
  ],
  templateUrl: './review-info.component.html',
  styleUrl: './review-info.component.scss',
  providers: [MessageService],
})
export class ReviewInfoComponent {
  termsAndConditions: boolean = false;
  userInfo!: UserInfo;

  constructor(
    public parentForm: FormGroupDirective,
    private server: RegistrationService,
    private messageService: MessageService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    let dosham = '';
    if (this.parentForm.form.value.moreInfo.dosham !== '') {
      dosham =
        (this.parentForm.form.value.moreInfo.dosham.length &&
          this.parentForm.form.value.moreInfo.dosham
            ?.map((element: any) => {
              return element.code;
            })
            .join(',')) ||
        '';
    }

    this.userInfo = {
      ...this.parentForm.form.value.basicInfo,
      ...this.parentForm.form.value.moreInfo,
      dosham,
      onBehalfOf: this.parentForm.form.value.basicInfo.onBehalfOf?.code || '',
      zodiac: this.parentForm.form.value.basicInfo.zodiac?.value || '',
      star: this.parentForm.form.value.basicInfo.star?.value || '',
      createdDate: new Date(),
      modifiedDate: new Date(),
    };
  }

  saveProfile() {
    this.server.save(this.userInfo).subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.showSuccess();
      },
      error: (error: any) => {
        console.log(error);
        this.showError();
      },
    });
  }

  onClose() {
    this.router.navigate(['/signin']);
  }

  private showSuccess() {
    let profile = `${this.userInfo.onBehalfOf} `.toLocaleLowerCase();
    if (profile === 'my self ') {
      profile = '';
    }

    this.messageService.add({
      key: 'toastMessage',
      severity: 'success',
      summary: 'Success',
      detail: `Your ${profile}profile have been created successfully. Now you can access all the features of this site.`,
    });
  }

  private showError() {
    this.messageService.add({
      key: 'toastMessage',
      severity: 'error',
      summary: 'Error',
      detail:
        'Some thing went wrong. Please try after some time or contact bala.in@gmail.com',
    });
  }
}
